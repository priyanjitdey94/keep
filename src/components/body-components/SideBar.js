import React, { Component } from 'react';
import './SideBar.css';
import { SIDEBAR_WIDTH } from '../common/constants';

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

            </div>
        );
    }
}

export default SideBar;
