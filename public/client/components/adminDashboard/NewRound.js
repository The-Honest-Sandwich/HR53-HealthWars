import React from 'react';
import axios from 'axios';


export default class NewRound extends React.Component {

  constructor() {

    super();

    this.state = {exercises: []};

    this.newRound = this.newRound.bind(this);
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

      console.log(context.state);
    });

  }


  // Manually initiate a new round
  newRound(e) {
    e.preventDefault();

    var roundObj = {
      'name': this.refs.name.value,
      'exercise': this.refs.exercise.value
    };

    var context = this;

    axios.post('/api/rounds', roundObj)
    .then(function(res) {
      console.log('Next round initiated!');
      alert('Next round initiated!');
      context.refs.name.value = '';
      context.refs.exercise.value = '';

      // add a new element to every user's scores array for the new round
      axios.post('/api/users/newround');
      console.log('Adding new round score value to all users!');
    })
    .catch(function(err) {
      console.log(err);
    });

  }


  render() {
    return (
        <div className='admin-form' id='newround'>
          <p>Initiate Next Round</p>
          <form className="form" onSubmit={this.newRound}>
            Round Name:<br />
            <input type="text" name="name" placeholder="Round Name" ref="name" /><br />
            Exercise:<br />
            <select name="exercise" form='newround' ref="exercise" >
              { this.state.exercises.map((exercise) =>
              <option value={exercise.toString()}>{exercise}</option>
              ) }
            </select><br />
            <input type="submit" value="Start Next Round" />
          </form>
        </div>
    )
  }
}