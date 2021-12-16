import { createReducer } from '@reduxjs/toolkit';
import { loadGuitars, loadCurrentGuitar, loadGuitarRequest } from '../action';

const initialState = {
  guitars: [],
  guitar: null,
  guitarLoading: false,
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload.guitars;
    })
    .addCase(loadCurrentGuitar, (state, action) => {
      state.questLoading = false;
      state.guitar = action.payload.guitar;
    })
    .addCase(loadGuitarRequest, (state) => {
      state.questLoading = true;
    });

});

export {guitars};
