import { createReducer } from '@reduxjs/toolkit';
import { loadGuitars, loadCurrentGuitar, loadGuitarRequest, loadGuitarsFilter } from '../action';

const initialState = {
  guitars: [],
  guitarsFilter: [],
  guitar: null,
  guitarLoading: false,
  isLoading: true,
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload.guitars;
    })
    .addCase(loadGuitarsFilter, (state, action) => {
      state.isLoading = false;
      state.guitarsFilter = action.payload.guitarsFilter;
    })
    .addCase(loadCurrentGuitar, (state, action) => {
      state.questLoading = false;
      state.guitar = action.payload.guitar;
    })
    .addCase(loadGuitarRequest, (state) => {
      state.questLoading = true;
    });

});

export {guitars};
