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
        <div className='weekDates'><h4>Week {this.props.weekNum + 1}:</h4></div>
        <div className='amountOfStars'><h4>{this.props.weekInfo}</h4></div>
        <div className='stars'>
          {this.renderStars()}
        </div>
        <div className="line-separator"></div>
      </div>
    )
  }
}