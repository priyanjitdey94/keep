import React, { Component } from 'react';
import './Tile.css';

export class Tile extends Component {
  render() {
      let style = {
          width: this.props.width,
          height: this.props.height,
          transform: this.props.transform
      }
    return (
      <div className='tile-container' style={style}>
        {this.props.text}
      </div>
    )
  }
}

export default Tile;
