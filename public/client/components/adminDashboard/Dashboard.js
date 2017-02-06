import React from 'react';
import axios from 'axios';
import AddUser from './AddUser.js';
import AddExercise from './AddExercise.js';
import NewRound from './NewRound.js';


export default class Dashboard extends React.Component {

  constructor() {

    super();

    this.state = {};
  }

  componentWillMount() {
    var context = this;

    // Get existing rounds data
    axios.get('/api/rounds').then(function(res) {
      context.setState({rounds: res.data});
      context.setState({currentRound: res.data[res.data.length - 1].name});
      context.setState({currentExercise: res.data[res.data.length - 1].exercise});
      // console.log(context.state);
    });

    // Get existing achievements
    axios.get('/api/achievements').then(function(res) {
      context.setState({achievements: res.data});
      // console.log(context.state);
    });

  }


  render() {
    return (
        <div className='admin-form container'>
          <div className='row'>
            <div className="col-sm-offset-3 col-sm-6">
              <div className='admin-header'>
                <h2>Administrator Dashboard</h2>
                <p>Current Round: {this.state.currentRound}</p>
                <p>Current Exercise: {this.state.currentExercise}</p>
              </div>
              <div>
                <NewRound />
                <AddUser />
                <AddExercise />
              </div>
            </div>
          </div>
        </div>
    )
  }
}




        