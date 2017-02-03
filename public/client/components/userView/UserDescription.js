import React from 'react';
import dummydata from './../dummydata/userViewData';

export default class UserDescription extends React.Component {
  render() {
    return (
      <div id='UserDescription'>
        <div id='userpic'><img height='100' width='75' src={dummydata.userpic}/></div>
        <div id='username'><h3>{dummydata.username}</h3></div>
      </div>
    )
  }
}