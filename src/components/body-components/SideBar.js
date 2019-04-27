import React, { Component } from 'react';
import './SideBar.css';
import { SIDEBAR_WIDTH, ICONS } from '../common/constants';
import SideBarItem from './SideBarItem';

class SideBar extends Component {
    constructor (props) {
        super(props);

        this.ref = React.createRef();
    }

    render () {
        let { isVisible, availableWidth } = this.props,
            classNames = 'sidebar-container',
            styleObj = {
                width: availableWidth || SIDEBAR_WIDTH
            };

        if (!isVisible) {
            styleObj.width = 0;
            classNames += ' sidebar-container-hidden';
        } else {
            classNames += ' sidebar-container-visible';
        }
        return (
            <div className={classNames} style={styleObj} ref={this.ref}>
                <div className='sidebar-section'>
                    <SideBarItem
                        icon={ICONS.bulb()}
                        label='Notes'
                    />
                    <SideBarItem
                        icon={ICONS.bell()}
                        label='Reminders'
                    />
                </div>
                <div className='sidebar-separator'></div>
                <div className='sidebar-section'>
                    <SideBarItem
                        icon={ICONS.pen()}
                        label='Edit Labels'
                    />
                </div>
                <div className='sidebar-separator'></div>
                <div className='sidebar-section'>
                    <SideBarItem
                        icon={ICONS.archive()}
                        label='Archive'
                    />
                    <SideBarItem
                        icon={ICONS.trash()}
                        label='Trash'
                    />
                </div>
            </div>
        );
    }
}

export default SideBar;
