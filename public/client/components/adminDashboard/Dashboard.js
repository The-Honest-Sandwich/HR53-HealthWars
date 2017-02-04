import React from 'react';
import axios from 'axios';


export default class Dashboard extends React.Component {

  constructor() {

    super();

    this.state = {};

    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    var context = this;

    // Get all users (for dealing with current user data)

    // 



  }

  addUser(e) {
      e.preventDefault();

      var userObj = {
        'name': this.refs.name.value,
        'username': this.refs.username.value,
        'password': this.refs.password.value,
        'team': this.refs.team.value,
        'scores': []
      };

      // below function will apply appropriate amount of 0 scores to a user if added after-the-fact (i.e. added in week 3, scores = [0, 0, 0])
      axios.get('/api/rounds').then(function(res) {
        var roundTotal = res.data.length;
        for (var i = 1; i <= roundTotal; i++) {
          userObj.scores.push(0);
        }

        axios.post('/api/users', userObj)
        .then(function(res) {
          console.log(res);
          console.log('User added!');
        })
        .catch(function(err) {
          console.log(err);
        });

      });

      this.render();

    }


  render() {
    return (
      <div id='admin-dashboard' className='text-center'>
        <div className='admin-header'>
          <h2>Administrator Dashboard<h2>
          <p>Current Round:</p>
          <p>Current Exercise:</p>
        </div>
        <div className='add-user'>
          <p>Temporary Add User Form</p>
          <form className="form" onSubmit={this.addUser}>
            <input type="text" name="name" placeholder="Name" ref="name" /><br />
            <input type="text" name="username" placeholder="Username" ref="username" /><br />
            <input type="text" name="password" placeholder="Password" ref="password" /><br />
            <input type="text" name="team" placeholder="Team" ref="team" /><br />
            <input type="submit" value="Add User" />
          </form>
        </div>
      </div>
    )
  }
}




        