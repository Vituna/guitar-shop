import { setComments, setCommentNew, setModalType, setCommentPostStatus } from '../action';

import { reviews } from './reviews';
import { mockComments } from '../../utils/test-mocks';

import { CommentPostStatus, TypeModal } from '../../const';

const state = {
  comments: [],
  commentNew: [],
  modalType: '',
  commentPostStatus: CommentPostStatus.Pristine,
};

describe('Reducer: Reviews', () => {

  it('should update comments', () => {
    expect(reviews(state, setComments(mockComments)))
      .toEqual({
        comments: mockComments,
        commentNew: [],
        modalType: '',
        commentPostStatus: CommentPostStatus.Pristine,
      });
  });
  it('should update setCommentNew', () => {
    expect(reviews(state, setCommentNew(mockComments)))
      .toEqual({
        comments: [],
        commentNew: mockComments,
        modalType: '',
        commentPostStatus: CommentPostStatus.Pristine,
      });
  });
  it('should update setModalType', () => {
    expect(reviews(state, setModalType(TypeModal.OpenCartAdd)))
      .toEqual({
        comments: [],
        commentNew: [],
        modalType: 'OpenCartAdd',
        commentPostStatus: CommentPostStatus.Pristine,
      });
  });
  it('should update setCommentPostStatus', () => {
    expect(reviews(state, setCommentPostStatus(CommentPostStatus.Posting)))
      .toEqual({
        comments: [],
        commentNew: [],
        modalType: '',
        commentPostStatus: CommentPostStatus.Posting,
      });
  });
});
