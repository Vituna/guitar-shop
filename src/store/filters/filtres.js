import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentSearch, changeMinPrice, changeMaxPrice } from '../action';

const initialState = {
  currentSearch: '',
  minPrice: null,
  maxPrice: null,
};

const filter = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentSearch, (state, action) => {
      state.currentSearch = action.payload;
    });
  builder
    .addCase(changeMinPrice, (state, action) => {
      state.minPrice = action.payload;
    });
  builder
    .addCase(changeMaxPrice, (state, action) => {
      state.maxPrice = action.payload;
    });
});

export {filter};
