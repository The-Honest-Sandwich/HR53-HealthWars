import React from 'react';

export default class Star extends React.Component {
  render() {
    return (
      <svg className="star" height="40" width="50" viewBox="0 0 500 210">
        <polygon points="100,10 40,198 190,78 10,78 160,198"
        style={{fill:'red',
                stroke:'red',
                strokeWidth:5,
                fillRule:'nonzero',
              }} />
      </svg>
    )
  }
}