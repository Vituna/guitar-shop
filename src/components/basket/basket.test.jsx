import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';

import Basket from './basket';
import { createApi } from '../../services/api';

import { mockGuitarsModalsArr } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: Basket', () => {
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store= mockStore({
    BASKET: {
      guitarAddBasket: mockGuitarsModalsArr,
      discountGuitar: 0,
      couponStatus: null,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Basket />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('test')).toBeInTheDocument();
    expect(screen.getByText(/Промокод на скидку/i)).toBeInTheDocument();
  });

  it('should minus and plus', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Basket />
        </Router>
      </Provider>,
    );

    const plusBtn = screen.getByLabelText('Увеличить количество');
    const minusBtn = screen.getByLabelText('Уменьшить количество');
    expect(plusBtn).toBeInTheDocument();
    expect(minusBtn).toBeInTheDocument();

    expect(store.getActions()).toEqual([]);

    userEvent.click(plusBtn);
    userEvent.click(minusBtn);
  });

  it('should correct false coupon', () => {

    const storeCoupon = mockStore({
      BASKET: {
        guitarAddBasket: mockGuitarsModalsArr,
        discountGuitar: 0,
        couponStatus: false,
      },
    });

    render(
      <Provider store={storeCoupon}>
        <Router history={history}>
          <Basket />
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Промокод принят/i)).not.toBeInTheDocument();
    expect(screen.getByText(/неверный промокод/i)).toBeInTheDocument();
  });

  it('should correct true coupon', () => {

    const storeCoupon = mockStore({
      BASKET: {
        guitarAddBasket: mockGuitarsModalsArr,
        discountGuitar: 0,
        couponStatus: true,
      },
    });

    render(
      <Provider store={storeCoupon}>
        <Router history={history}>
          <Basket />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Промокод принят/i)).toBeInTheDocument();
    expect(screen.queryByText(/неверный промокод/i)).not.toBeInTheDocument();
  });

});
