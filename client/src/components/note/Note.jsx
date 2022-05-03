import React from "react";


function Note(props) {


  return ( 
      <div>
          <h2>{props.title}</h2>
          <p>{props.info}</p>
          <span>{`Last actualization: ${props.lastAct}`}</span>     
      </div>
  );
}

export default Note;
