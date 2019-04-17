import React, { Component } from 'react';
import './OptionBar.css';
import './OptionButton.css';

class OptionBar extends Component {
    render () {
        return (
            <div className='optionbar-container'>
                <div className='option-button refresh'></div>
                <div className='option-button view'></div>
                <div className='option-button settings'></div>
            </div>
        );
    }
}

export default OptionBar;
