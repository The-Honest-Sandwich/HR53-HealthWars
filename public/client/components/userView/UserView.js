import React from 'react';
import UserDescription from './UserDescription';
import Week from './Week';
import Star from './Star';
import dummydata from './../dummydata/userViewData';
	

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

