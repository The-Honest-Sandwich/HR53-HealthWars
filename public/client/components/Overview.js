import React from 'react';

export default class Overview extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Organization</th>
          <th>Total</th>
        </tr>
        <UserTotal />
      </table>
    )
  }
}