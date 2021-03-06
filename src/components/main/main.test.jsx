import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Main from './main';
import { createApi } from '../../services/api';

import { SORT_TYPES } from '../../const';
import { mockGuitars, mockGuitar } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Application Routing', () => {
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
      currentSearch: '',
      minPrice: 2700,
      maxPrice: 35000,
      typeFilter: [],
      stringFilter: [],
      guitarsPrice: mockGuitars,
    },
    SORT: {
      sortType: SORT_TYPES.Price,
      directionType: SORT_TYPES.Rating,
    },
    PAGINATUON: {
      currentPage: 2,
      guitarsCount: 9,
    },
  });

  it('should render "Catalog" when user navigate to "catalog/page_1/"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Каталог гитар/i)).toBeInTheDocument();
  });
});
