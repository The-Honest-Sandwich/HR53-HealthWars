import React from 'react';
import LoggingExercise from './exercise/LoggingExercise';
import Overview from './overview/Overview.js';
import NavigationBar from './Navbar';
import axios from 'axios';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rounds: null,
      users: null,
      exercise: null,
      currentUser: null,
      signedInUser: null
    }
  }

  // pulls all information from the DB and sets the states above which by default are null
  componentDidMount () {
    console.log('inside componentDidMount');
    this.updateData();
  }

  logout() {
    this.setState({
      currentUser: null,
      signedInUser: null
    });
  }

  changeSignedInUser(user) {
    console.log('inside changeSignedInUser', user);
    var context = this;
    this.setState({
      signedInUser: user
    }, () => {
      // console.log('inside setState callback', this.state.signedInUser);
      var signedInUserUrl = '/api/users/' + this.state.signedInUser;
      axios.get(signedInUserUrl).then(function(res) {
        context.setState({currentUser: res.data}, function() {
          // console.log('currentUser', this.state.currentUser);
        });
      });
    });
  }

  updateData () {
    var context = this;
    axios.get('/api/rounds').then(function(res) {
      context.setState({rounds: res.data});
    });
    axios.get('/api/users').then(function(res) {
      context.setState({users: res.data});
    });
    axios.get('/api/exercises').then(function(res) {
      context.setState({exercise: res.data});
    });
  }

  render() {
    var context = this;

    // Passes all the DB information via states to all components
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        rounds: context.state.rounds,
        users: context.state.users,
        exercise: context.state.exercise,
        currentUser: context.state.currentUser,
        signedInUser: context.state.signedInUser,
        changeSignedInUser: context.changeSignedInUser.bind(context),
        updateData: context.updateData.bind(context)
      })
    })
    console.log('React.Children: ', children)
    return (
      <div>
        <NavigationBar signedInUser={this.state.signedInUser} logout={this.logout.bind(this)}/>
        {children}
      </div>
    )
  }
}
