import React, { Component } from 'react';
import SearchButton from '../common/SearchButton';
import './SearchBar.css';

class SearchBar extends Component {
    render () {
        return (
            <div className='search-bar'>
                <div className='search-icon'>
                    <SearchButton />
                </div>
                <div className='search-box' contentEditable="true" spellCheck="false"></div>
                <div className='search-icon hidden-icon'>
                    <SearchButton />
                </div>
            </div>
        );
    }
}

export default SearchBar;
