import React, { Component } from 'react';
import './MosaicLayout.css';
import Tile from './Tile';
import { connect } from 'react-redux';
import Smartlabel from 'fusioncharts-smartlabel';

const smartlabel = new Smartlabel(),
    WIDTH = 210,
    PADDING = 16,
    TILEWIDTH = WIDTH + 2 * PADDING,
    HEIGHT = 22.5,
    MARGIN = 48,
    HEIGHT_SPACING = 16 + 16 + 16,
    CSTYLE = {
        width: (242 * 5 + 16 * 6) + 'px'
    };

smartlabel.useEllipsesOnOverflow(true);
smartlabel.setStyle({
    'font-size': '16px',
    'font-family': 'Product Sans',
    'line-height': '22.5px'
});
class MosaicLayout extends Component {
    constructor (props) {
        super(props);

        this.state = {
            columnCount: undefined
        };

        this.ref = React.createRef();
    }

    render () {
        let tiles = this.generateTiles();

        return (
            <div className='mosaic-container' style={CSTYLE} ref={this.ref}>
                {tiles}
            </div>
        )
    }

    componentDidMount () {
        const mosaicLayout = this,
            { current } = mosaicLayout.ref;

        mosaicLayout.setState({
            columnCount: Math.floor(current.offsetWidth / TILEWIDTH)
        });

        window.addEventListener('resize', () => {
            let curColumnCount = Math.floor(current.offsetWidth / TILEWIDTH);

            if (curColumnCount !== mosaicLayout.state.columnCount) {
                mosaicLayout.setState({
                    columnCount: curColumnCount
                })
            }
        });
    }

    generateTiles () {
        if (!this.state.columnCount) {
            return [];
        }

        const { notes } = this.props,
            { columnCount } = this.state,
            TILES = notes.map(note => {
                let sl =  smartlabel.getSmartText(note.text, WIDTH, 15 * HEIGHT);
                sl.width = WIDTH;

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
            tx = k * WIDTH + k * MARGIN;
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
