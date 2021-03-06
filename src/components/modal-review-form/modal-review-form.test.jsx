import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import { createApi } from '../../services/api';
import ModalReviewForm from './modal-review-form';

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
      modalType: TypeModal.OpenFormReviews,
      commentPostStatus: CommentPostStatus.Pristine,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalReviewForm />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Оставить отзыв/i)).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(5);
  });

  it ('should radio by click', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalReviewForm />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('radio')[2]).not.toBeChecked();
    userEvent.click(screen.getAllByRole('radio')[2]);
    expect(screen.getAllByRole('radio')[2]).toBeChecked();
  });

  it ('should input', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalReviewForm />
        </Router>
      </Provider>,
    );

    expect(screen.queryByDisplayValue('NO')).not.toBeInTheDocument();
    userEvent.type(screen.getByTestId('disadvantage'), 'NO');
    expect(screen.getByDisplayValue('NO')).toBeInTheDocument();
  });

  it ('should click btnClose and keyDown Esc', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalReviewForm />
        </Router>
      </Provider>,
    );

    expect(store.getActions()).toEqual([]);
    expect(screen.getByLabelText(/Закрыть/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText(/Закрыть/i));
    userEvent.type(document.body, '{esc}');
  });
});


