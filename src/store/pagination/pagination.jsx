import { createReducer } from '@reduxjs/toolkit';
import { currentNumberPage, loadGuitarsCountPagination, setLimit } from '../action';

const initialState = {
  currentPage: 1,
  guitarsCount: 9,
  limit: 9,
};

const pagination = createReducer(initialState, (builder) => {
  builder
    .addCase(currentNumberPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(loadGuitarsCountPagination, (state, action) => {
      state.guitarsCount = action.payload;
    })
    .addCase(setLimit, (state, action) => {state.limit = action.payload;});
});

export {pagination};
