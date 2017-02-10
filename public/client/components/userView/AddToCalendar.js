import React from 'react';

export default class AddToCalendar extends React.Component {

  render() {

    return (
    	<button className="btn btn-primary admin-button"> 
	    	<a href="https://www.google.com/calendar/render?action=TEMPLATE&text=test&dates=20140127T224000Z/20140320T221500Z&details=For+details,+link+here:+http://www.example.com&location=Waldorf+Astoria,+301+Park+Ave+,+New+York,+NY+10022&sf=true&output=xml">Add to my calendar</a>
			</button>
    )
  }
}

  	


			// 	<a href="http://www.google.com/calendar/event?
			// action=TEMPLATE
			// &text="{this.props.exercise + " Challenge!"}"
			// &dates="{this.props.date}"
			// &details= "{this.props.user} + " has challenged you to a" + {this.props.exercise} + " Challenge!!""
			// &location="{this.props.location}"
			// &trp=false
			// &sprop=
			// &sprop=name:"
			// target="_blank" rel="nofollow">Add to my calendar</a>