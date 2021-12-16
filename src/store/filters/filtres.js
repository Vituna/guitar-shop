import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentSearch } from '../action';

const initialState = {
  currentSearch: '',
};

const filter = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentSearch, (state, action) => {
      state.currentSearch = action.payload.filter;
    });
});

export {filter};
