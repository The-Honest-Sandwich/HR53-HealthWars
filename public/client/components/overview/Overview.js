import React from 'react';
import UserTotal from './UserTotal.js';
import axios from 'axios';


export default class Overview extends React.Component {

  constructor() {

    super();

    this.state = {
      data: []
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
      <div id='overview' className='text-center'>
        <div className='overview-header'>
          Organization Totals
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            { this.state.data.map((person) =>
            <UserTotal className='texttd' name={person.name} team={person.team} total={person.total} />
            ) }
          </tbody>
        </table>
      </div>
    )
  }
}