import { createReducer } from '@reduxjs/toolkit';
import { setComments, setModalType, setCommentNew, setCommentPostStatus } from '../action';

import { TypeModal, CommentPostStatus } from '../../const';

const initialState = {
  comments: [],
  commentNew: [],
  modalType: TypeModal.CloseFormReviews,
  commentPostStatus: CommentPostStatus.Pristine,

};

const reviews = createReducer(initialState, (builder) => {
  builder
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCommentNew, (state, action) => {
      state.commentNew = action.payload;
    })
    .addCase(setModalType, (state, action) => {
      state.modalType = action.payload;
    })
    .addCase(setCommentPostStatus, (state, action) => {
      state.commentPostStatus = action.payload;
    });
});

export {reviews};
