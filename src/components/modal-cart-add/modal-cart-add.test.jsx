import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import { createApi } from '../../services/api';
import ModalCardAdd from './modal-cart-add';

import { mockGuitarsModals } from '../../utils/test-mocks';
import { TypeModal } from '../../const';

const history = createMemoryHistory();

describe('Component: ModalCardAdd', () => {

  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store = mockStore({
    GUITARS: {
      guitarAdd: mockGuitarsModals,
    },
    REVIEWS: {
      modalType: TypeModal.OpenCartAdd,
    },
    BASKET: {
      guitarIdAndCount: {2:1},
    },

  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalCardAdd />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Добавить в корзину/i)).toBeInTheDocument();
    expect(screen.getByText(/струнная/i)).toBeInTheDocument();
  });
  it ('should click buttom Close and keyDown Esc', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalCardAdd />
        </Router>,
      </Provider>,
    );

    expect(store.getActions()).toEqual([]);

    expect(screen.getByLabelText(/Закрыть/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText(/Закрыть/i));
    userEvent.type(document.body, '{esc}');
  });

  it ('should click buttom Add', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalCardAdd />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Добавить в корзину/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Добавить в корзину/i));
  });
});
