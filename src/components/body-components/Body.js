import React, { Component } from 'react';
import MosaicLayout from './MosaicLayout';
import './Body.css';

class Body extends Component {
    render () {
        return (
            <div className='body-container'>
                <MosaicLayout />
            </div>
        );
    }
}

export default Body;