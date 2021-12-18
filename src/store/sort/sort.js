import { createReducer } from '@reduxjs/toolkit';
import { changeSortType, changeDirectionType } from '../action';

import { SORT_TYPES } from '../../const';

const initialState = {
  sortType: SORT_TYPES.Price,
  directionType: SORT_TYPES.Rating,
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
