import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getAllNotes = async function () {
  try{

    const notes = await axios.get("notes/getNotes");
    return notes;
  }catch(error){
    console.log(error)
  }
};

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        title: "primera nota",
        content:
          "es la prueba de la primera nota para ver si se renderiza todo normal",
        lastAct: new Date(),
      },
      {
        title: "primera nota",
        content:
          "es la prueba de la primera nota para ver si se renderiza todo normal",
        lastAct: new Date(),
      },
      {
        title: "primera nota",
        content:
          "es la prueba de la primera nota para ver si se renderiza todo normal",
        lastAct: new Date(),
      },
      {
        title: "primera nota",
        content:
          "es la prueba de la primera nota para ver si se renderiza todo normal",
        lastAct: new Date(),
      },
    ],
  },
  reducers: {
    getNotes(state, action) {
      const notes = getAllNotes();
      return { ...state, ...notes };
    },
    createNote(state, action) {},
    updateNote(state, action) {},
    deleteNote(state, action) {},
  },
});

export const { createNote, updateNote, deleteNote, getNotes } =
  notesSlice.actions;
export default notesSlice.reducer;
