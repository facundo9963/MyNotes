import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./slices/notes";

const store = configureStore({
  reducer: notesReducer,
});

export default store;
