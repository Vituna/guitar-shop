import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentSearch, changeMinPrice, changeMaxPrice, changeTypeFilter, changeStringFilter, loadGuitarsPrice } from '../action';

const initialState = {
  currentSearch: '',
  minPrice: '',
  maxPrice: '',
  typeFilter: [],
  stringFilter: [],
  guitarsPrice: [],
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
  builder
    .addCase(loadGuitarsPrice, (state, action) => {
      state.guitarsPrice = action.payload.guitarsPrice;
    });
});

export {filter};
