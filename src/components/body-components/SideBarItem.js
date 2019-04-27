import React, { Component } from 'react';
import './SideBarItem.css';

class SideBarItem extends Component {
    render () {
        let { icon, label } = this.props;

        return (
            <div className='sidebaritem-container'>
                <div className='sidebaritem-inner-container'>
                    <div className='sidebaritem-icon'>
                        {icon}
                    </div>
                    <div className='sidebaritem-label'>{label}</div>
                </div>
            </div>
        );
    }
}

export default SideBarItem;