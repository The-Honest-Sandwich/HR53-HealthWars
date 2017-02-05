import React from 'react';
import dummydata from './../dummydata/userViewData';

export default class UserDescription extends React.Component {
  constructor(props) {
    // console.log('props', props);
    super(props);
    this.state = {
      name: '',
      team: ''
    }
  }

  // componentDidMount() {
  //   this.setState({name: this.props.user.name});
  //   this.setState({team: this.props.user.team});
  // }

  componentWillReceiveProps() {
    this.setState({name: this.props.user.name});
    this.setState({team: this.props.user.team});
  }

  render() {
    return (
      <div id='UserDescription'>
        <div id='username'><h3>{this.props.user.name}</h3></div>
        <div id='team'>Team: {this.props.user.team}</div>
      </div>
    )
  }
}

// temp removing userpicture
// <div id='userpic'><img height='100' width='75' src={dummydata.userpic}/></div>