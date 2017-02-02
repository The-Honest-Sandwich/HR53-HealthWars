import React from 'react';

export default function ChangeUnits (props) {
  return (
    <div>
      <button onClick={()=>(props.onClick(props.type))}>{props.type}</button>
    </div>
  );
};