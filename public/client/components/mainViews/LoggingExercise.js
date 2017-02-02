import React from 'react';
import ChangeUnits from './../buttons/ChangeUnits';
import SubmitUnits from './../buttons/SubmitUnits';
import axios from 'axios';

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

  unitChange(type) {
    if (type === '-' && this.state.units > 0) {
      this.setState({units: this.state.units - 1});
    } else if (type === '+') {
      this.setState({units: this.state.units + 1});
    }
  }

  submitClick(data) {
    // console.log('submitting data', data);
    this.setState({units: 0})
    return axios.post('http://127.0.0.1:3000/submitUnits', data);
  }

  render() {
    return (
      <div className="text-center">
        <div>{ this.state.exercise }</div>
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