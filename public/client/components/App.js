import React from 'react';
import LoggingExercise from './exercise/LoggingExercise';
import Overview from './overview/Overview.js';
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