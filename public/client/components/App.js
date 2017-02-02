import React from 'react';
var UserView = require('./UserView.js')
export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserView />
      </div>
    )
  }
}