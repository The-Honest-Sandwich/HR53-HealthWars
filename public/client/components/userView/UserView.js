import React from 'react';
import UserDescription from './UserDescription';
import Week from './Week';
import Star from './Star';
import dummydata from './../dummydata/userViewData';
	

export default class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: '', team: ''}
    };
  }

  // listens for change in props from App.js and sets the state to the new values
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser !== null) {
      this.setState({currentUser: nextProps.currentUser})
    }
  }

  componentDidMount() {
    this.setState({currentUser: this.props.currentUser})
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

