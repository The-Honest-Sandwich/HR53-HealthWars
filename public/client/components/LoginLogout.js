// // Jared change
// import React from 'react';
// import axios from 'axios';
//
// export default class LoginPage extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       something: probably
//     }
//   }
//
//   onSignIn(googleUser) {
//     // Useful data for your client-side scripts:
//     var profile = googleUser.getBasicProfile();
//     // profile gets profile of user. We can create a user object with the following info:
//     // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//     // console.log('Full Name: ' + profile.getName());
//     // console.log('Given Name: ' + profile.getGivenName());
//     // console.log('Family Name: ' + profile.getFamilyName());
//     // console.log("Image URL: " + profile.getImageUrl());
//     // console.log("Email: " + profile.getEmail());
//     // The ID token you need to pass to your backend:
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log('ID token is what we send to back-end');
//     console.log('ID Token: ' + id_token);
//     var url = '/api/users/' + profile.getEmail();
//     var userRoute = '/api/users';
//     var user = {
//       name: profile.getName(),
//       email: profile.getEmail(),
//     };
//     if (id_token) {
//       // Upon Successful Google Auth - AJAX Calls
//       $.ajax({
//         type: 'GET',
//         url: url,
//       })
//       .done(function(data) {
//         console.log('GET data passed is: ', data);
//         // check if User Email Account exists in DB
//         if (data) {
//           return window.location = 'old-index.html';
//         } // end of if
//         $.ajax({
//             type: 'POST',
//             url: userRoute,
//             data: user,
//           })
//           .done(function() {
//             window.location = 'old-index.html';
//           });
//         });
//       } // end of if
//     };
//
//     gapi.load('auth2', function() {
//       gapi.auth2.init();
//     });
//
//     signOut() {
//       var auth2 = gapi.auth2.getAuthInstance();
//       auth2.signOut().then(function() {
//         console.log('User signed out.');
//       });
//     };
//
//   render() {
//     return (
//       <div>
//         <h2>Sign In</h2>
//         {}
//       </div>
//     )
//   }
// }
