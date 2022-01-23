import { createReducer } from '@reduxjs/toolkit';
import { setComments, setModalType } from '../action';

import { TypeModal } from '../../const';

const initialState = {
  comments: [],
  modalType: TypeModal.CloseFormReviews,
};

const reviews = createReducer(initialState, (builder) => {
  builder
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setModalType, (state, action) => {
      state.modalType = action.payload;
    });
});

export {reviews};
