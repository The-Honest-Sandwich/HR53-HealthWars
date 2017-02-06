import React from 'react';
import ChangeUnits from './ChangeUnits';
import SubmitUnits from './SubmitUnits';
import DropdownSelector from './DropdownSelector';
import axios from 'axios';

//dummy data
var exercises = [{name: "push-ups"}, {name:"stairs"}, {name:"planks"}]

export default class LoggingExercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: 'PLACE_HOLDER_EXERCISE',
      units: 0,
    }
    this.unitChange = this.unitChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser !== null) {
    console.log(nextProps);
    }
  }

  unitChange(type) {
    if (type === '-' && this.state.units > 0) {
      this.setState({units: this.state.units - 1});
    } else if (type === '+') {
      this.setState({units: this.state.units + 1});
    }
  }

  submitClick(data) {

    var user = this.props.currentUser.username;
    var units = this.state.units;
    var currentScores = this.props.currentUser.scores;

    console.log('Current scores:', currentScores);
    // Change user's in-state scores array: increment last element (current round's score)
    currentScores[currentScores.length - 1] += units;
    console.log('New scores:', currentScores);

    // Post scores back to database
    axios.post('/api/users/' + user + '/scores', {'scores': currentScores});
    console.log('Updated scores for', user, 'posted to database!');

    // reset visible unit counter back to 0
    this.setState({units: 0});
  }

  render() {
    return (
      <div className="text-center">
        <DropdownSelector title={this.state.exercise} exercises={exercises}/>
        <table className="table">
          <tbody>
            <tr>
              <td><ChangeUnits onClick={this.unitChange} type={'-'} /></td>
              <td><div className="unit-display">{ this.state.units }</div> </td>
              <td><ChangeUnits onClick={this.unitChange} type={'+'} /></td>
            </tr>
          </tbody>
        </table>
        <div>
          <SubmitUnits onClick={this.submitClick} data={this.state.units}/>
        </div>
      </div>
    )
  }
}