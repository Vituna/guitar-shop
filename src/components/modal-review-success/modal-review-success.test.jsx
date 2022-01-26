import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import { createApi } from '../../services/api';
import ModalReviewSuccess from './modal-review-success';

import { mockGuitar } from '../../utils/test-mocks';
import { CommentPostStatus, TypeModal } from '../../const';

const history = createMemoryHistory();
const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);

describe('Component: ModalReviewForm', () => {

  const store = mockStore({
    GUITARS: {
      guitar: mockGuitar,
    },
    REVIEWS: {
      modalType: TypeModal.OpenSuccessReviews,
      commentPostStatus: CommentPostStatus.Pristine,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalReviewSuccess />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Спасибо за ваш отзыв!/i)).toBeInTheDocument();
  });

  it ('should click btnClose and keyDown Esc', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalReviewSuccess />
        </Router>
      </Provider>,
    );

    expect(store.getActions()).toEqual([]);
    expect(screen.getByLabelText(/Закрыть/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText(/Закрыть/i));
    userEvent.type(document.body, '{esc}');
  });
});


