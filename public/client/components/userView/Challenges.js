import React from 'react';
import axios from 'axios';
import NewChallenge from './NewChallenge';
import Challenge from './Challenge'
import { Link } from 'react-router';

export default class Challenges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	challenges: []
    }
  }

 componentDidMount () {
  var context = this;
    axios.get('/api/challenges').then(function(res) {
      context.setState({challenges: res.data});
    });
  }

	render() {
		return (
			<div>
				<h1>Challenges</h1>
				<table className="pending">
	         <th> Pending </th>
	          <tbody>
	          	<tr>
	          		<th>Challenger</th>
	          		<th>Challenged</th>
	          		<th>Exercise</th>
	          		<th>Date</th>
	          		<th>Location</th>
	          		<th>Accept Challenge?</th>
	          	</tr>
	           	{this.state.challenges.map( (challenge, i) => {
	           		console.log(challenge);
              	return <Challenge key={i} user={challenge.user} invited={challenge.invited} exercise={challenge.exercise} date={challenge.time} location={challenge.location}/>
            	})}
	          </tbody>
	        </table>
	        <table className="upcoming">
	          <tbody>
	           <th> Upcoming </th>
	           		<th>Challenger</th>
	          		<th>Challenged</th>
	          		<th>Exercise</th>
	          		<th>Date</th>
	          		<th>Location</th>
	          	{this.state.challenges.map( (item) => {
	           		//return item;
              	//return <Week key={i} weekInfo={num} weekNum={i} />
            	})}
	          </tbody>
	        </table>
				<button className="btn btn-primary admin-button"><Link id="normalized-Link" to="/newChallenge">Create New Challenge</Link></button>
			</div>
		)
	}
}