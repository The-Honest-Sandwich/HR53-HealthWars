import React from 'react';

export default class UserTotal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.team}</td>
        <td>{this.props.total}</td>
      </tr>
    )
  }
}