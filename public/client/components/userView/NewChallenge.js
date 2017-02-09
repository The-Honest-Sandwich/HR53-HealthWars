import React from 'react';
import axios from 'axios';


export default class NewChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      user: {name: 'Savy'} //****hardcoded for now
    };
    this.newChallenge = this.newChallenge.bind(this);
  }


  addData(item) {
    var currentData = this.state.exercises;
    currentData.push(item);
    this.setState({
      exercises: currentData
    });
  }

  componentDidMount() {
    var context = this;

    axios.get('/api/exercises').then(function(res) {
      res.data.forEach(function(exercise) {
        context.addData(exercise.name);
      });
    });
  }

  // Manually add a challenge to the database
  newChallenge(e) {
       e.preventDefault();

      var challengeObj =  {
        user: this.state.user.name,
        invited: this.refs.invited.value.split(','),
        exercise: this.refs.custom.value === '' ? this.refs.exercise.value : this.refs.custom.value,
        time: this.refs.time.value,
        location: this.refs.location.value
      }

      console.log(challengeObj)

      var context = this;

      axios.post('/api/challenges', challengeObj)
      .then(function(res) {
        alert('Challenge added!');
        context.refs.invited.value = '';
        context.refs.custom.value = '';
        context.refs.exercise.value = '';
        context.refs.time.value = '';
        context.refs.location.value = '';
      })
      .catch(function(err) {
        console.log(err);
      });

      //send email

    }


  render() {
    return (
        <div className='challenge-form' id="newChallenge">
          <form className="form" onSubmit={this.newChallenge}>
            <h3>New Challenge</h3>
            <input className="form-control" type="text" name="invited" placeholder="Jane Doe, Joe Shmo" ref="invited" />
            <select className="exercise-dropdown" name="exercise" form='newChallenge' ref="exercise" >
            <option value="">--Select Exercise--</option>
              { this.state.exercises.map((exercise, i) =>
              <option key={i} value={exercise.toString()}>{exercise}</option>) }
            </select>  OR  <input type="text" name="custom" placeholder="Custom" ref="custom" /><br/><br/>
            <input className="form-control" type="datetime-local" max="2999-12-31" min="2017-02-08" name="time" ref="time" />
            <input className="form-control" type="text" name="location" placeholder="location" ref="location" />
            <button className="btn btn-primary admin-button" type="submit" value="Add User">Create Challenge</button>
          </form><br />
        </div>
    )
  }
}