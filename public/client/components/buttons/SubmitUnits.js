import React from 'react';

export default function SubmintUnits (props) {
  return (
    <div>
      <button onClick={() => (props.onClick(props.data))}>Submit</button>
    </div>
  );
}