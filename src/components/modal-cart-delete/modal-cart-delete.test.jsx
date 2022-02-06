import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import ModalCartDelete from './modal-cart-delete';

import { mockGuitarsModalsArr, mockGuitarsModals } from '../../utils/test-mocks';
import { TypeModal } from '../../const';

const history = createMemoryHistory();

describe('Component: ModalCardAdd', () => {

  const mockStore = configureMockStore([thunk]);

  const store = mockStore({
    GUITARS: {
      guitarAdd: mockGuitarsModals,
    },
    REVIEWS: {
      modalType: TypeModal.OpenDeleteGuitar,
    },
    BASKET: {
      guitarAddBasket: mockGuitarsModalsArr,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalCartDelete />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Продолжить покупки/i)).toBeInTheDocument();
    expect(screen.getByText(/струнная/i)).toBeInTheDocument();
  });
  it ('should click buttom Close and keyDown Esc', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalCartDelete />
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
          <ModalCartDelete />
        </Router>,
      </Provider>,
    );

    // expect(screen.getByText(/Добавить в корзину/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Продолжить покупки/i));
  });
});
