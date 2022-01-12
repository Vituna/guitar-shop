import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import FilterType from './filter-type';
import { createApi } from '../../services/api';
import thunk from 'redux-thunk';

import { mockGuitars, mockGuitar } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: Filter Type', () => {
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
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilterType />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Тип гитар/i)).toBeInTheDocument();
    expect(screen.getByText(/Акустические гитары/i)).toBeInTheDocument();
    expect(screen.getByText(/Электрогитары/i)).toBeInTheDocument();
  });

});
