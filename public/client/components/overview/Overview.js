import React from 'react';
import UserTotal from './UserTotal.js';
import axios from 'axios';


export default class Overview extends React.Component {

  constructor() {

    super();

    this.state = {
      users: null,
      data: []
    };
  }

  // scans for change in props for use on the page
  componentWillReceiveProps(nextProps) {
    var context = this;
      if (nextProps.users !== this.state.users) {
        this.setState({users: nextProps.users});
        nextProps.users.forEach(function(person) {
          var total = person.scores.reduce((pv, cv) => pv+cv, 0);
          person.total = total;
          context.addData(person);
        });
        context.sortByTotal();
      }
  }

  // pushes all values into the data state for use in the table
  addData(item) {
    var currentData = this.state.data;
    currentData.push(item);
    this.setState({
      data: currentData
    });
  }

  // sorts the table based on the values found and sets the next state
  sortByTotal() {
    var currentData = this.state.data;

    currentData.sort(function(a, b) {
      return b.total - a.total;
    });

    this.setState({
      data: currentData
    });
  }


  render() {
    return (
      <div id='overview' className='text-center'>
        <div className='overview-header'>
          <h2>Organization Totals</h2>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Total Stars</th>
            </tr>
          </thead>
          <tbody>
            { this.state.data.map((person, i) =>
            <UserTotal key={i} className='texttd' name={person.name} team={person.team} total={person.total} />
            ) }
          </tbody>
        </table>
      </div>
    )
  }
}