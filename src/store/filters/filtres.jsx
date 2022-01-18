import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentSearch, changeMinPrice, changeMaxPrice, changeTypeFilter, changeStringFilter } from '../action';

const initialState = {
  currentSearch: '',
  minPrice: null,
  maxPrice: null,
  typeFilter: [],
  stringFilter: [],
  isLoadingFilter: true,
};

const filter = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentSearch, (state, action) => {
      state.currentSearch = action.payload;
    });
  builder
    .addCase(changeMinPrice, (state, action) => {
      state.minPrice = action.payload;
      state.isLoadingFilter = false;
    });
  builder
    .addCase(changeMaxPrice, (state, action) => {
      state.maxPrice = action.payload;
    });
  builder
    .addCase(changeTypeFilter, (state, action) => {
      state.typeFilter = action.payload;
    });
  builder
    .addCase(changeStringFilter, (state, action) => {
      state.stringFilter = action.payload;
    });
});

export {filter};
