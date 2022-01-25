/* eslint-disable testing-library/prefer-presence-queries */
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
// import userEvent from '@testing-library/user-event';
import { createApi } from '../../services/api';
import ModalReviewForm from './modal-review-form';
import App from '../guitar-card/guitar-card';
import userEvent from '@testing-library/user-event';

import { mockGuitar, mockComments, mockGuitars } from '../../utils/test-mocks';
import { CommentPostStatus, TypeModal,SORT_TYPES } from '../../const';

const history = createMemoryHistory();
const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const fakeClosePopupFn = jest.fn();

const store = mockStore({
  GUITARS: {
    guitars : mockGuitars,
    guitarsFilter: [],
    guitar: mockGuitar,
  },
  FILTER: {
    currentSearch: '',
    minPrice: 2700,
    maxPrice: 35000,
    typeFilter: [],
    stringFilter: [],
  },
  SORT: {
    sortType: SORT_TYPES.Price,
    directionType: SORT_TYPES.Rating,
  },
  PAGINATUON: {
    currentPage: 1,
    guitars: mockGuitars,
  },
  REVIEWS: {
    modalType: TypeModal.OpenFormReviews,
    commentPostStatus: CommentPostStatus.Pristine,
    comments: mockComments,
    commentNew: mockComments,

  },
});



describe('Component: ModalReviewForm', () => {


  // const fakeClosePopupFn = jest.fn();

  // const store = mockStore({
  //   GUITARS: {
  //     guitar: mockGuitar,
  //   },
  //   REVIEWS: {
  //     modalType: TypeModal.OpenFormReviews,
  //     commentPostStatus: CommentPostStatus.Pristine,
  //     comments: mockComments,
  //     commentNew: mockComments,

  //   },
  // });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
        <ModalReviewForm />
      </Provider>,
    );

    // userEvent.click(screen.getByTestId('button-close'));

    // expect(fakeClosePopupFn).toBeCalled();

    expect(screen.getByText(/Оставить отзыв/i)).toBeInTheDocument();
    expect(screen.getByText(/Ваше Имя/i)).toBeInTheDocument();
  });
});

it('when user click on close button, onCloseButtonClick should be called', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
      <ModalReviewForm />
    </Provider>,
  );

  userEvent.click(screen.getByTestId('button-close'));

  expect(fakeClosePopupFn).toBeCalled();
});
