import React, { Component } from 'react';
import Logo from '../../assets/keep_logo.png';
import './Signature.css';

class Signature extends Component {
    render () {
        return (
            <div className='signature-container'>
                <img src={Logo} alt='keep' className='signature-logo'></img>
                <div className='signature-text'>Keep</div>
            </div>
        );
    }
}

export default Signature;
