import { createReducer } from '@reduxjs/toolkit';
import { changeSortType, changeDirectionType } from '../action';

const initialState = {
  sortType: '',
  directionType: '',
};

const sort = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.sort;
    })
    .addCase(changeDirectionType, (state, action) => {
      state.directionType = action.payload.direction;
    });
});

export {sort};
