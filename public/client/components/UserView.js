import React from 'react';
	

var dummydata = {
	userpic: 'http://us.hellomagazine.com/imagenes/profiles/john-travolta/4619-john-travolta-pb.jpg',
	username: 'John Travolta',
	stats: [
		{
			dates:'Jan 31 - Feb 5',
			stars:3
		},
		{
			dates:'Jan 31 - Feb 5',
			stars:10
		},
		{
			dates:'Jan 31 - Feb 5',
			stars:3
		},
		{
			dates:'Jan 31 - Feb 5',
			stars:4
		},
		{
			dates:'Jan 31 - Feb 5',
			stars:5	
		}
	]

};


class Star extends React.Component {
	render() {
		return (
			<svg className="star" height="50" width="50" viewBox="0 0 500 210">
			  	<polygon points="100,10 40,198 190,78 10,78 160,198"
					style={{fill:'gold',
					  		stroke:'gold',
					  		strokeWidth:5,
					  		fillRule:'nonzero',
					  	  }} />
			</svg>
		)
	}
}

class UserDescription extends React.Component {
	render() {
		return (
			<div id='UserDescription'>
				<div id='userpic'><img height='100' width='75' src={dummydata.userpic}/></div>
				<div id='username'><h3>{dummydata.username}</h3></div>
			</div>
		)
	}
}

class Week extends React.Component {

	renderStars() {
		var arr = [];
		for(var i = 0; i < this.props.weekInfo.stars; i++) {
			arr.push( <Star key={i}/> );
		}
		return arr;
	}

	render() {
		return (
			<div className='Week'>
				<div className='weekDates'><p>Jan 31 - Feb 5</p></div>
				<div className='stars'>
					{this.renderStars()}
				</div>
			</div>
		)
	}
}

export default class UserView extends React.Component {

  render() {
    return (
      <div id='UserView'>
      	<UserDescription />
      	{dummydata.stats.map( (curWeek, i) => {
			return <Week key={i} weekInfo={curWeek} />
		})}
      </div>

    )
  }
}




module.exports = UserView;