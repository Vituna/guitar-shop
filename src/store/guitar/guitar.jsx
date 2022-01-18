import { createReducer } from '@reduxjs/toolkit';
import { loadGuitars, loadCurrentGuitar, loadGuitarRequest, loadGuitarsFilter, setComments, noLoadingUrl, loadFilterGuitars, setGuitarsError, loadingCurrentGuitar } from '../action';

const initialState = {
  guitars: [],
  guitarsFilter: null,
  comments: [],
  guitar: null,
  guitarLoading: false,
  isLoadingFilter: true,
  isError: false,
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload.guitars;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadGuitarsFilter, (state, action) => {
      state.guitarsFilter = action.payload.guitarsFilter;
      state.isLoadingFilter = false;
    })
    .addCase(loadFilterGuitars, (state) => {
      state.isLoadingFilter = true;
    })
    .addCase(loadCurrentGuitar, (state, action) => {
      state.guitarLoading = false;
      state.guitar = action.payload.guitar;
    })
    .addCase(loadingCurrentGuitar, (state) => {
      state.guitarLoading = true;
    })
    .addCase(loadGuitarRequest, (state) => {
      state.questLoading = true;
    })
    .addCase(noLoadingUrl, (state) => {
      state.loadingUrl = false;
    })
    .addCase(setGuitarsError, (state, action) => {
      state.isError = action.payload;
    });
});

export {guitars};
