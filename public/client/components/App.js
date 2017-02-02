import React from 'react';
import LoggingExercise from './mainViews/LoggingExercise';
import Overview from './Overview.js';
import NavigationBar from './Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}