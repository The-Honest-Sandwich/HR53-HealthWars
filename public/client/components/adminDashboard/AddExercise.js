import React from 'react';
import axios from 'axios';


export default class AddExercise extends React.Component {

  constructor(props) {

    super(props);

    this.state = {};

    this.addExercise = this.addExercise.bind(this);
  }

  // Manually add an exercise to the database
  addExercise(e) {
      e.preventDefault();

      var exObj = {
        'name': this.refs.name.value,
        'unit': this.refs.unit.value,
        'description': this.refs.description.value
      };

      var context = this;


      axios.post('/api/users', exObj)
      .then(function(res) {
        console.log('New exercise added!');
        alert('NewExercise added!');
        context.refs.name.value = '';
        context.refs.unit.value = '';
        context.refs.description.value = '';
      })
      .catch(function(err) {
        console.log(err);
      });

    }


  render() {
    return (
        <div className='admin-form'>
          <p>Add A New Exercise</p>
          <form className="form" onSubmit={this.addExercise}>
            <input type="text" name="name" placeholder="Name" ref="name" /><br />
            <input type="text" name="unit" placeholder="Unit Measure" ref="unit" /><br />
            <input type="text" name="description" placeholder="Exercise Description" ref="description" /><br />
            <input type="submit" value="Add Exercise" />
          </form>
        </div>
    )
  }
}