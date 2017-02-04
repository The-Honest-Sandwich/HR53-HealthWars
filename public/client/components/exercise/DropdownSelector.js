import React from 'react';  
import { ButtonToolbar, DropdownButton, NavDropdown, MenuItem } from 'react-bootstrap';


export default class LoggingExercise extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var exerciseList = this.props.exercises.map(function(exercise, i){
        return <MenuItem key={i}>{exercise.name}</MenuItem>
    });

    return (
      <ButtonToolbar>
        <DropdownButton className="btn btn-primary" bsSize="large" title={this.props.title} id="dropdown-size-large">
          {exerciseList}
        </DropdownButton>
      </ButtonToolbar>
    )
  }
}