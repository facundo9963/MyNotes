import React from "react";
import styles from "./Note.module.css"

function Note(props) {


  return ( 
      <div className={styles.container}>
          <h2>{props.title}</h2>
          <p>{props.info}</p>
          <span>{`Last actualization: ${props.lastAct}`}</span>     
      </div>
  );
}

export default Note;
