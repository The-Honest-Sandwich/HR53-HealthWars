import React from 'react';

export default function ChangeUnits (props) {
  return (
    <div>
      <button className="btn btn-success" onClick={()=>(props.onClick(props.type))}>{props.type}</button>
    </div>
  );
};