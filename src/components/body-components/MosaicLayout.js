import React, { PureComponent } from 'react';
import './MosaicLayout.css';
import Tile from './Tile';
import { connect } from 'react-redux';
import Smartlabel from 'fusioncharts-smartlabel';
import { TILEINNERWIDTH } from '../common/constants';

const smartlabel = new Smartlabel(),
    HEIGHT = 22.5,
    MARGIN = 48,
    HEIGHT_SPACING = 16 + 16 + 16;

smartlabel.useEllipsesOnOverflow(true);
smartlabel.setStyle({
    'font-size': '16px',
    'font-family': 'Product Sans',
    'line-height': '22.5px'
});
class MosaicLayout extends PureComponent {
    constructor (props) {
        super(props);

        this.ref = React.createRef();
    }

    render () {
        let tiles = this.generateTiles(),
            { availableWidth } = this.props;

        return (
            <div className='mosaic-container' style={{width: availableWidth + 'px'}} ref={this.ref}>
                {tiles}
            </div>
        )
    }

    generateTiles () {
        const { notes, columnCount } = this.props,
            TILES = notes.map(note => {
                let sl =  smartlabel.getSmartText(note.text, TILEINNERWIDTH, 15 * HEIGHT);
                sl.width = TILEINNERWIDTH;

                return sl;
            });
        
        let i,
            j,
            k,
            minHeight,
            len = TILES.length,
            tiles = [],
            tx,
            ty,
            buckets = [...Array(columnCount).keys()].map(a => 0),
            bucketContentCount = [...Array(columnCount).keys()].map(a => 0);

        for (i = len - 1, j = 0; i >= 0; i--, j++) {
            j = j % 5;
            minHeight = Infinity;
            for (j = 0, k = 0; j < columnCount; j++) {
                if (buckets[j] < minHeight) {
                    k = j;
                    minHeight = buckets[j];
                }
            }
            tx = k * TILEINNERWIDTH + k * MARGIN;
            ty = minHeight + bucketContentCount[k] * HEIGHT_SPACING;

            buckets[k] += TILES[i].height;
            bucketContentCount[k]++;

            tiles.push(
                <Tile
                    key={i}
                    width={TILES[i].width}
                    height={TILES[i].height + 16}
                    text={TILES[i].oriText}
                    transform={`translate(${tx}px, ${ty}px)`}
                />
            );
        }

        return tiles;
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
};

export default connect(mapStateToProps)(MosaicLayout);
