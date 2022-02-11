import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import { createApi } from '../../services/api';
import ModalAddSuccess from './modal-add-success';

import { TypeModal } from '../../const';
import { mockGuitar} from '../../utils/test-mocks';

const history = createMemoryHistory();
const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);

describe('Component: ModalReviewForm', () => {

  const store = mockStore({
    GUITARS: {
      guitarAdd: mockGuitar,
    },

    REVIEWS: {
      modalType: TypeModal.OpenAddGood,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalAddSuccess />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Товар успешно добавлен в корзину/i)).toBeInTheDocument();
  });

  it ('should click btnClose and keyDown Esc', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalAddSuccess />
        </Router>
      </Provider>,
    );

    expect(store.getActions()).toEqual([]);
    expect(screen.getByLabelText(/Закрыть/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText(/Закрыть/i));
    userEvent.type(document.body, '{esc}');
  });
});


