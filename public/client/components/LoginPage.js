import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';



export default class AddUser extends React.Component {

  constructor(props) {

    super(props);

    this.state = {};

    this.addUser = this.addUser.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
  }

  handleSignInSubmit(e) {
    e.preventDefault();
    // Build out the functionality to compare username and password before invoking changeSignedInUser and updating state.
    // if (!this.refs.passwordSI.value) {
    //   this.refs.passwordSI.placeholder.value = 'Please enter a password';
    // }
    // var userURL = '/api/users/' + this.refs.usernameSI.value;
    // axios.get('')
    // axios.get('/api/users/signin').then(function(res) {
    //   console.log('inside axios get');
    //   if (res) {
    //   } else {
    //     console.log('this shit aint working');
    //   }
//    })
        this.props.changeSignedInUser(this.refs.usernameSI.value);

  }


  // Manually add a user to the database
  addUser(e) {
      e.preventDefault();

      var userObj = {
        'name': this.refs.name.value,
        'username': this.refs.username.value,
        'password': this.refs.password.value,
        'team': this.refs.team.value,
        'email': this.refs.email.value,
        'scores': []
      };


      var context = this;

      // below function will apply appropriate amount of 0 scores to a user if added after-the-fact (i.e. added in week 3, scores = [0, 0, 0])
        axios.get('/api/rounds').then(function(res) {
        var roundTotal = res.data.length;
        for (var i = 1; i <= roundTotal; i++) {
          userObj.scores.push(0);
        }

        axios.post('/api/users', userObj)
        .then(function(res) {
          // console.log('User added!');
          alert('User added!');
          context.refs.name.value = '';
          context.refs.username.value = '';
          context.refs.password.value = '';
          context.refs.team.value = '';
          context.refs.email.value = '';
        })
        .catch(function(err) {
          console.log(err);
        });

      });
    }


  render() {
    return (
        <div className="admin-form">
          <form className="form col-sm-offset-3 col-sm-6 sign-in-form" onSubmit={this.addUser}>
            <h5>Sign-In</h5>
            <input className="form-control" type="text" name="username" placeholder="Username" ref="usernameSI" />
            <input className="form-control" type="text" name="password" placeholder="Password" ref="passwordSI" />
            <button className="btn btn-primary admin-button" type="submit" value="Add User" onClick={this.handleSignInSubmit}><Link to="/user">Sign-In</Link></button>
          </form><br />
        <form className="form col-sm-offset-3 col-sm-6 new-user-form" onSubmit={this.addUser}>
            <h5>New User? Sign-Up</h5>
            <input className="form-control" type="text" name="name" placeholder="Name" ref="name" />
            <input className="form-control" type="text" name="username" placeholder="Username" ref="username" />
            <input className="form-control" type="text" name="password" placeholder="Password" ref="password" />
            <input className="form-control" type="text" name="team" placeholder="Team" ref="team" />
            <input className="form-control" type="text" name="email" placeholder="Email" ref="email" />
            <button className="btn btn-primary admin-button" type="submit" value="Add User">Add User</button>
          </form><br />
        </div>
    )
  }
}


// // Jared change
// import React from 'react';
// import axios from 'axios';
// import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
//
// export default class LoginPage extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       Something: 'Awesome'
//     }
//   }
//
//   componentDidMount() {
//     console.log('at least I work');
//   }
  // <div>
  //   <a className="btn btn-block btn-social btn-google">
  //     <span className="fa fa-google">Sign in with Google</span>
  //   </a>
  // </div>

  // <div className="container-fluid col-lg-2 col-lg-offset-5 top-buffer">
  //   <button onClick={()=>{axios.get('/login/google')}}>Login with Google</button>
  // </div>

  // <div className="g-signin2 container-fluid col-lg-2 col-lg-offset-5 top-buffer" data-onsuccess="onSignIn"></div>
//   render() {
//     return (
//
//     )
//   }
// }
