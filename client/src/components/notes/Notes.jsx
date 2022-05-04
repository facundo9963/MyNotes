import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/slices/notes";
import Note from "../note/Note";
import styles from "./Notes.module.css"

function Notes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const notes = useSelector((state) => state.notes);
  console.log(notes)

  return (
    <>{
      !notes? <h2>loading...</h2>:
      <div className={styles.container}>
        {notes &&
          notes.map((note,i) => {
            return (
              <Note
              key={i}
              ID={note.ID}
              title={note.title}
              info={note.content}
              lastAct={note.lastAct}
              />
              );
            })}
      </div>
  }
    </>
  );
}

export default Notes;
