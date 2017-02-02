import React from 'react';
import UserTotal from './UserTotal.js';
import axios from 'axios';


export default class Overview extends React.Component {

  constructor() {

    super();

    this.state = {
      data: [ // TEMPORARY STUB DATA
        {name: 'John Smith', team: 'Monkeys', total: 22},
        {name: 'Alex Smith', team: 'Monkeys', total: 15},
        {name: 'Greg Jones', team: 'Salamanders', total: 12},
        {name: 'Ben Hamm', team: 'Salamanders', total: 13},
        {name: 'George Forrest', team: 'Sharks', total: 17},
        {name: 'Violet Jones', team: 'Creatures', total: 13},
        {name: 'James Johnson', team: 'Salamanders', total: 18}
      ]
    };
  }

  addData(item) {
    var currentData = this.state.data;
    currentData.push(item);
    this.setState({
      data: currentData
    });
  }

  sortByTotal() {
    var currentData = this.state.data;

    currentData.sort(function(a, b) {
      return b.total - a.total;
    });

    this.setState({
      data: currentData
    });
  }

  componentDidMount() {
    var context = this;

    var users = axios.get('/api/users').then(function(res) {
      res.data.forEach(function(person) {
        var total = person.scores.reduce((pv, cv) => pv+cv, 0);
        person.total = total;
        context.addData(person);
      });
      context.sortByTotal();
    });

  }

  render() {
    return (
      <div id='overview'>
        <div className='overview-header'>
          Organization Totals
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Total</th>
          </tr>
          { this.state.data.map((person) =>
          <UserTotal name={person.name} team={person.team} total={person.total} />
          ) }
        </table>
      </div>
    )
  }
}