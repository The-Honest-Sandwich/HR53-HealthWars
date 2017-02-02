import React from 'react';

export default function SubmintUnits (props) {
  return (
    <div>
      <button className='btn btn-danger btn-lg' onClick={() => (props.onClick(props.data))}>Submit</button>
    </div>
  );
}