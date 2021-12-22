import { createReducer } from '@reduxjs/toolkit';
import { currentNumberPage, loadGuitarsPagination } from '../action';

const initialState = {
  currentPage: 1,
  guitars: [],
};

const pagination = createReducer(initialState, (builder) => {
  builder
    .addCase(currentNumberPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(loadGuitarsPagination, (state, action) => {
      state.guitars = action.payload;
    });
});

export {pagination};
