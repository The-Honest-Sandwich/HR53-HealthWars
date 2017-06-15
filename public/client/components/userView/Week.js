import React from 'react';
import Star from './Star'

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
      <tr className='Week row container-fluid'>
        <td className='weekDates'><h4>Week {this.props.weekNum + 1}:</h4></td>
        <td className='amountOfStars text-right'><h4>{this.props.weekInfo}</h4></td>
        <td className='stars col-md-12 vcenter'>{this.renderStars()}</td>
      </tr>
    )
  }
}