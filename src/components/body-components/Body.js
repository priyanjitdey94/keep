import React, { Component } from 'react';
import { connect } from 'react-redux';
import MosaicLayout from './MosaicLayout';
import './Body.css';
import { TILEWIDTH, TILEPADDING, SIDEBAR_WIDTH } from '../common/constants';
import SideBar from './SideBar';
import { TOGGLE_SIDEBAR } from '../actions/action-types';

class Body extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            availableWidth: props.availableWidth || 900,
            sidebarWidth: SIDEBAR_WIDTH,
            mosaicLayoutColumnCount: 3
        };
    }
    render () {
        let { mosaicLayoutColumnCount } = this.state,
            { sideBarVisibility } = this.props,
            calculatedWidth = mosaicLayoutColumnCount * TILEWIDTH + (mosaicLayoutColumnCount + 1) * TILEPADDING;

        return (
            <div className='body-container'>
                <SideBar isVisible={sideBarVisibility} />
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
        let { availableWidth, toggleSideBar, sideBarVisibility } = this.props,
            {sidebarWidth} = this.state;

        availableWidth = +availableWidth || window.innerWidth;

        if (availableWidth < 1100) {
            toggleSideBar(false);
            sidebarWidth = 0;
        } else if (!sideBarVisibility) {
            toggleSideBar(true);
            sidebarWidth = SIDEBAR_WIDTH;
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

        if (mosaicLayoutColumnCount * TILEWIDTH + (mosaicLayoutColumnCount + 1) * TILEPADDING > availableWidth) {
            mosaicLayoutColumnCount--;
        }

        this.setState({
            availableWidth,
            sidebarWidth,
            mosaicLayoutColumnCount
        });
    }
}

const mapStateToProps = state => {
    return {
        sideBarVisibility: state.sideBarVisibility
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleSideBar: (sideBarVisibility) => {
            dispatch({
                type: TOGGLE_SIDEBAR,
                sideBarVisibility
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);