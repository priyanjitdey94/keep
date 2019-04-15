import React, { Component } from 'react';
import SearchIcon from '../common/SearchIcon';
import './SearchBar.css';

class SearchBar extends Component {
    render () {
        return (
            <div className='search-bar'>
                <div className='search-icon'>
                    <SearchIcon />
                </div>
                <div className='search-box' contentEditable="true" spellCheck="false"></div>
                <div className='search-icon hidden-icon'>
                    <SearchIcon />
                </div>
            </div>
        );
    }
}

export default SearchBar;
