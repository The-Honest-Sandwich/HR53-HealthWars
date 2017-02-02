import React from 'react';
import LoggingExercise from './mainViews/LoggingExercise';
import Overview from './Overview.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        Components will go here.
        <Overview />
      </div>
    )
  }
}