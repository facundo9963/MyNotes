import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const getAllNotes= async function(){
  const notes= await axios.get("notes/getNotes")
  return notes
}


const notesSlice = createSlice({
    name: 'posts',
    initialState:{
      notes:[]
    },
    reducers: {
      getNotes(state, action) {
        const notes= getAllNotes()
        return {...notes}
      },
      createNote(state, action) {
          
      },
      updateNote(state, action) {},
      deleteNote(state, action) {},
    },
  })

export const {createNote, updateNote, deleteNote, getNotes} = notesSlice.actions
export default notesSlice.reducer