import React from 'react';

export default function ChangeUnits (props) {
  return (
    <div>
      <button className="btn btn-warning" onClick={()=>(props.onClick(props.type))}>{props.type}</button>
    </div>
  );
};