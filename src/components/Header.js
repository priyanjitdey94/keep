import React, { Component } from 'react';
import Signature from './common/Signature';
import MenuIcon from './common/MenuIcon';
import SearchBar from './header-components/SearchBar';
import './Header.css';
import OptionBar from './header-components/OptionBar';
import User from './header-components/User';

class Header extends Component {
    render () {
        return (
            <div className='header-base'>
                <div className='header-item header-left'>
                    <MenuIcon />
                    <Signature />
                </div>
                <div className='header-item header-center'>
                    <SearchBar />
                    <OptionBar />
                </div>
                <div className='header-item header-right'>
                    <User />
                </div>
            </div>
        );
    }
}

export default Header;
