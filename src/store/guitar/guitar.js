import { createReducer } from '@reduxjs/toolkit';
import { loadGuitars } from '../action';

const initialState = {
  guitars: [],
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload.guitars;
    });
});

export {guitars};
