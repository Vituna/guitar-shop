import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import FilterPrice from './filter-price';
import { createApi } from '../../services/api';

import { mockGuitars } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: FilterPrice', () => {
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store= mockStore({
    FILTER: {
      minPrice: 2700,
      maxPrice: 35000,
      guitarsPrice: mockGuitars,

    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilterPrice />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Цена, ₽/i)).toBeInTheDocument();
  });
});
