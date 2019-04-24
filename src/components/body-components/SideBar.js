import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
    render () {
        return (
            <div className='sidebar-container' style={{width: this.props.availableWidth}}>

            </div>
        );
    }
}

export default SideBar;
