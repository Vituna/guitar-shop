import { createReducer } from '@reduxjs/toolkit';
import { loadGuitars, loadCurrentGuitar, loadGuitarRequest, loadGuitarsFilter, setComments, noLoadingUrl } from '../action';

const initialState = {
  guitars: [],
  guitarsFilter: [],
  comments: [],
  guitar: null,
  guitarLoading: false,
  isLoading: true,
  loadingUrl: true,
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload.guitars;
    })
    .addCase(setComments, (state, action) => {state.comments =action.payload;})

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
    })
    .addCase(noLoadingUrl, (state) => {
      state.loadingUrl = false;
    });
});

export {guitars};
