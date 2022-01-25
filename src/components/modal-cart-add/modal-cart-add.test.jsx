/* eslint-disable testing-library/prefer-presence-queries */
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';

import { createApi } from '../../services/api';
import ModalCardAdd from './modal-cart-add';

import { mockGuitar } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: ModalCardAdd', () => {

  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store = mockStore({
    GUITARS: {
      guitar: mockGuitar,
    },
    REVIEWS: {
      modalType: '',
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

    expect(screen.queryByTestId('count-value')).toHaveTextContent('Цена:');

  });
});
