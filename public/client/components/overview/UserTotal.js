import React from 'react';

export default class UserTotal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td className='texttd'>{this.props.name}</td>
        <td className='texttd'>{this.props.team}</td>
        <td className='texttd'>{this.props.total}</td>
      </tr>
    )
  }
}