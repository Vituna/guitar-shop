/* eslint-disable testing-library/no-node-access */
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import GuitarsList from './guitars-list';
import { createApi } from '../../services/api';
import thunk from 'redux-thunk';

import { mockGuitars } from '../../utils/test-mocks';
import { SORT_TYPES } from '../../const';

const history = createMemoryHistory();

describe('Component: Guitars List', () => {
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store = mockStore({
    GUITARS: {
      guitars : mockGuitars,
      guitarsFilter: [],
    },
    FILTER: {
      currentSearch: '',
      minPrice: 2700,
      maxPrice: 35000,
      typeFilter: [],
      stringFilter: [],
    },
    SORT: {
      sortType: SORT_TYPES.Price,
      directionType: SORT_TYPES.Rating,
    },
    PAGINATUON: {
      currentPage: 1,
      guitars: mockGuitars,
    },
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <GuitarsList />
        </Router>,
      </Provider>,
    );

    // eslint-disable-next-line testing-library/no-container
    expect(container.querySelector('.catalog__cards')).toBeInTheDocument();
  });

});
