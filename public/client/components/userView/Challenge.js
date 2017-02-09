import React from 'react';

export default class Challenge extends React.Component {

  render() {

    return (
      <tr className='Challenge row container-fluid'>
        <td className='user'>{this.props.user}</td>
        <td className='invited'>{this.props.invited}</td>
        <td className='exercise'>{this.props.exercise}</td>
        <td className='date'>{this.props.date}</td>
        <td className='location'>{this.props.location}</td>
      </tr>
    )
  }
}