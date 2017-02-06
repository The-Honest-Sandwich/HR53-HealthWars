import React from 'react';
import Star from './Star.js';

export default class Week extends React.Component {

  renderStars() {

    var arr = [];
    for(var i = 0; i < this.props.weekInfo; i++) {
      arr.push( <Star key={i}/> );
    }
    return arr;
  }

  render() {

    return (
      <div className='Week'>
        <div className='weekDates'><h3>Week {this.props.weekNum + 1}: {this.props.weekInfo}</h3></div>
        <div className='stars'>

          {this.renderStars()}
        </div>
      </div>
    )
  }
}