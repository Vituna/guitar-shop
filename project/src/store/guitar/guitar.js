import { createReducer } from '@reduxjs/toolkit';
import { loadGuitars } from '../action';

const initialState = {
  guitars: [],
};

const guitars = createReducer(initialState, (builder) => {
  builder
  .addCase(loadGuitars, (state, action) => {
    const {guitars} = action.payload;
    state.guitars = guitars;
  })
});

export {guitars};
