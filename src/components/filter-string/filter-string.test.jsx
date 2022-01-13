import { Router}  from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import FilterString from './filter-string';
import { createApi } from '../../services/api';

import { mockGuitars, mockGuitar } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: FilterString', () => {
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store= mockStore({
    GUITARS: {
      guitars : mockGuitars,
      guitarsFilter: [],
      guitar: mockGuitar,
    },
    FILTER: {
      typeFilter: [],
      stringFilter: [],
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilterString />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Количество струн/i)).toBeInTheDocument();
  });
});
