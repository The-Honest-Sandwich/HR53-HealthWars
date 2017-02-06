import React from 'react';
import UserDescription from './UserDescription';
import Week from './Week';
import Star from './Star';
import dummydata from './../dummydata/userViewData';
	

export default class UserView extends React.Component {
  constructor(props) {
    // console.log('props in const', props)
    super(props);
    this.state = {
      currentUser: {name: '', team: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser !== null) {
      this.setState({currentUser: nextProps.currentUser})
    }
  }


  render() {
    return (
      <div id='UserView'>
      	<UserDescription user={this.state.currentUser}/>
      	{dummydata.stats.map( (curWeek, i) => {
			return <Week key={i} weekInfo={curWeek} />
		})}
      </div>

    )
  }
}

