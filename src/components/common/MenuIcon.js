import React, { Component } from 'react';
import './MenuIcon.css'
import { connect } from 'react-redux';
import { TOGGLE_SIDEBAR } from '../actions/action-types';

class MenuIcon extends Component {
    render () {
        return (
            <div className='menu-icon-container' onClick={this.toggle}>
                <div className='menu-icon'></div>
                <div className='menu-icon'></div>
                <div className='menu-icon'></div>
            </div>
        );
    }

    toggle = () => {
        let { sideBarVisibility, toggleSideBar } = this.props;

        toggleSideBar(!sideBarVisibility);
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);