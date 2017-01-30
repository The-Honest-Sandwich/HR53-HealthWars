import React from 'react';
import UserTotal from './UserTotal.js';

const data = [
  {name: 'John Smith', team: 'Monkeys', total: 22},
  {name: 'Alex Smith', team: 'Monkeys', total: 15},
  {name: 'Greg Jones', team: 'Salamanders', total: 12},
  {name: 'Ben Hamm', team: 'Salamanders', total: 13},
  {name: 'George Forrest', team: 'Sharks', total: 17},
  {name: 'Violet Jones', team: 'Creatures', total: 13},
  {name: 'James Johnson', team: 'Salamanders', total: 18}
];

export default class Overview extends React.Component {
  render() {
    return (
      <div id='overview'>
        <div class='overview-header'>
          Organization Totals
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Total</th>
          </tr>
          { data.map((person) =>
          <UserTotal name={person.name} team={person.team} total={person.total} />
          ) }
        </table>
      </div>
    )
  }
}