import React from 'react';
import UserDescription from './UserDescription';
import Week from './Week';
import Star from './Star';
import dummydata from './../dummydata/userViewData';
	

export default class UserView extends React.Component {
  constructor(props) {
    // console.log('props in const', props)
    super(props);
    // this.state = {
    //   currentUser: {name: '', team: ''}
    // };
  }

  componentDidMount () {
    // var context = this;
    // console.log('outside', this.state.currentUser);
    // console.log('outside props', this.props.currentUser);
    // this.setState({currentUser: context.props.currentUser}, function() {
    //   console.log('currentUser', context.state.currentUser);
    // });
  }



  render() {
    return (
      <div id='UserView'>
      	<UserDescription user={this.props.currentUser}/>
      	{dummydata.stats.map( (curWeek, i) => {
			return <Week key={i} weekInfo={curWeek} />
		})}
      </div>

    )
  }
}

