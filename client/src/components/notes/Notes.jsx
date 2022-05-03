import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/slices/notes";

function Notes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const notes = useSelector((state) => state.notes);

  return (
    <>
      <div>
        {notes &&
          notes.map((note) => {
            return (
              <Note
                key={note.ID}
                ID={note.ID}
                title={note.title}
                info={note.info}
                lastAct={note.lastAct}
              />
            );
          })}
      </div>
    </>
  );
}

export default Notes;
