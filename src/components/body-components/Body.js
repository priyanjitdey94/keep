import React, { Component } from 'react';
import MosaicLayout from './MosaicLayout';
import './Body.css';
import { TILEWIDTH, TILEPADDING } from '../common/constants';
import SideBar from './SideBar';

class Body extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            availableWidth: props.availableWidth || 900,
            sidebarWidth: 0,
            mosaicLayoutColumnCount: 3
        };
    }
    render () {
        let { sidebarWidth, mosaicLayoutColumnCount } = this.state,
            calculatedWidth = mosaicLayoutColumnCount * TILEWIDTH + (mosaicLayoutColumnCount + 1) * TILEPADDING;
        
        return (
            <div className='body-container'>
                {sidebarWidth > 0 ? <SideBar /> : ''}
                <MosaicLayout
                    availableWidth={calculatedWidth}
                    columnCount={mosaicLayoutColumnCount}
                />
            </div>
        );
    }

    componentDidMount () {
        this._onResizeCallback();
        window.addEventListener('resize', this._onResizeCallback);
    }

    _getDimensionInformation () {
        let { availableWidth } = this.props,
            {sidebarWidth} = this.state;

        availableWidth = +availableWidth || window.innerWidth;

        if (availableWidth < 1000) {
            sidebarWidth = 0;
        }

        return {
            availableWidth,
            sidebarWidth
        };
    }

    _onResizeCallback = () => {
        let { availableWidth, sidebarWidth } = this._getDimensionInformation(),
            layoutWidth,
            mosaicLayoutColumnCount;

        layoutWidth = availableWidth - sidebarWidth;

        mosaicLayoutColumnCount = Math.floor(layoutWidth / TILEWIDTH);

        this.setState({
            availableWidth,
            sidebarWidth,
            mosaicLayoutColumnCount
        });
    }
}

export default Body;