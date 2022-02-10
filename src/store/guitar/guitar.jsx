import { createReducer } from '@reduxjs/toolkit';
import { loadGuitars, loadCurrentGuitar, loadGuitarRequest, loadGuitarsFilter, noLoadingUrl, loadFilterGuitars, setGuitarsError, loadingCurrentGuitar, setErrorNoFound, setGuitarAddModal, loadingGuitarBasket } from '../action';

const initialState = {
  guitars: [],
  guitarsFilter: [],
  guitarAdd: [],
  guitar: [],
  guitarLoading: false,
  isLoadingFilter: true,
  isLoadingGuitarBasket: true,
  isError: false,
  loadingUrl: true,
  errorNoFound: false,
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.isLoadingGuitarBasket = false;
      state.guitars = action.payload.guitars;
    })
    .addCase(loadGuitarsFilter, (state, action) => {
      state.guitarsFilter = action.payload.guitarsFilter;
      state.isLoadingFilter = false;
    })
    .addCase(loadFilterGuitars, (state) => {
      state.isLoadingFilter = true;
    })
    .addCase(loadingGuitarBasket, (state) => {
      state.isLoadingGuitarBasket = true;
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
    })
    .addCase(setErrorNoFound, (state, action) => {
      state.errorNoFound = action.payload;
    })
    .addCase(setGuitarAddModal, (state, action) => {
      state.guitarAdd = action.payload.guitarAdd;
    });
});

export {guitars};
