import { createReducer } from '@reduxjs/toolkit';
import { currentNumberPage, loadGuitarsPagination, setLimit } from '../action';

const initialState = {
  currentPage: 1,
  guitars: [],
  limit: 9,
};

const pagination = createReducer(initialState, (builder) => {
  builder
    .addCase(currentNumberPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(loadGuitarsPagination, (state, action) => {
      state.guitars = action.payload;
    })
    .addCase(setLimit, (state, action) => {state.limit = action.payload;});
});

export {pagination};
