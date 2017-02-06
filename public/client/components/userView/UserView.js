import React from 'react';
import UserDescription from './UserDescription';
import Week from './Week';
import Star from './Star';

export default class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
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

    if(this.state.currentUser) {
      return (
      <div id='UserView'>
        <UserDescription user={this.state.currentUser}/>
        <table>
          {this.state.currentUser.scores.map( (num, i) => {
            return <Week key={i} weekInfo={num} weekNum={i} />
          })}
        </table>
      </div>
      )
    } else {

      return (

        <h3>LOADING</h3>

      )
    }

  }
}

