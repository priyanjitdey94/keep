import React, { Component } from 'react';
import './MosaicLayout.css';
import Tile from './Tile';

const COL_NUM = 5,
  WIDTH = 242,
  HEIGHT = 22.5,
  MARGIN = 16,
  TILES = [{
    width: WIDTH,
    height: HEIGHT * 5 
  }, {
    width: WIDTH,
    height: HEIGHT * 12
  }, {
    width: WIDTH,
    height: HEIGHT * 18
  }, {
    width: WIDTH,
    height: HEIGHT * 9
  }, {
    width: WIDTH,
    height: HEIGHT * 10
  }, {
    width: WIDTH,
    height: HEIGHT * 12
  }, {
    width: WIDTH,
    height: HEIGHT * 15
  },{
    width: WIDTH,
    height: HEIGHT * 7
  },{
    width: WIDTH,
    height: HEIGHT * 6
  },{
    width: WIDTH,
    height: HEIGHT * 10
  }],
  CSTYLE = {
    width: (242 * 5 + 16 * 6) + 'px'
  };


export class MosaicLayout extends Component {
  render() {
    let i,
      j,
      k,
      minHeight,
      len = TILES.length,
      tiles = [],
      tx,
      ty,
      buckets = [...Array(COL_NUM).keys()].map(a => 0);

    for (i = len - 1, j = 0; i >= 0; i--, j++) {
      j = j % 5;
      minHeight = Infinity;
      for (j = 0, k = 0; j < COL_NUM; j++) {
        if (buckets[j] < minHeight) {
          k = j;
          minHeight = buckets[j];
        }
      }
      tx = k * WIDTH + k * MARGIN;
      ty = minHeight + (minHeight > 0 ? MARGIN : 0);

      buckets[k] += TILES[i].height;

      tiles.push(
        <Tile
          key={i}
          width={TILES[i].width}
          height={TILES[i].height}
          transform={`translate(${tx}px, ${ty}px)`}
        />
      );
    }
    return (
      <div className='mosaic-container' style={CSTYLE}>
        {tiles}
      </div>
    )
  }
}

export default MosaicLayout;
