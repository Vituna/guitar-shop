import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentSearch, changeMinPrice, changeMaxPrice, changeTypeFilter } from '../action';

const initialState = {
  currentSearch: '',
  minPrice: null,
  maxPrice: null,
  typeFilter: [],
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
  builder
    .addCase(changeTypeFilter, (state, action) => {
      state.typeFilter = action.payload;
    });
});

export {filter};
