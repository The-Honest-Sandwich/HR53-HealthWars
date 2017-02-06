import React from 'react';
import UserTotal from './UserTotal.js';
import axios from 'axios';


export default class Overview extends React.Component {

  constructor() {
    super();
    this.state = {
      users: null, // this is more or less used as a check for new props
      data: [] // this is the data to be used to sort the Overview table
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

  componentDidMount () {
    var context = this;
    this.setState({users: this.props.users});
    if (this.props.users !== null) {
      console.log('mounting data');
      this.props.users.forEach(function(person) {
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
          Organization Totals
        </div>
        <table className='table'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Total</th>
            </tr>
            { this.state.data.map((person, i) =>
            <UserTotal key={i} className='texttd' name={person.name} team={person.team} total={person.total} />
            ) }
          </tbody>
        </table>
      </div>
    )
  }
}