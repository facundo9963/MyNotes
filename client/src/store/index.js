import { configureStore } from '@reduxjs/toolkit'


import notesReducer from './slices/notes';

const store = configureStore(
    notesReducer
);

export default store;