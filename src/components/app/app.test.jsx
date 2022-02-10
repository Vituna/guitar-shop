import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createApi } from '../../services/api';
import App from './app';

import { AppRoute, SORT_TYPES, CommentPostStatus } from '../../const';
import { mockGuitars, mockGuitar} from '../../utils/test-mocks';

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
      guitarAdd: mockGuitar,
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
    REVIEWS: {
      comments: [],
      commentNew: [],
      modalType: '',
      commentPostStatus: CommentPostStatus.Pristine,
    },
    BASKET: {
      guitarIdAndCount: {},
      discountGuitar: 0,
      couponStatus: null,
    },
  });

  const fakeApp = (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByText(/404. Requested page is not available/)).toBeInTheDocument();
  });

  it('should render "Guitar" when user navigate to "/guitars/:id"', () => {
    history.push('/guitars/1');
    render(fakeApp);

    expect(screen.getByText(/Количество струн/)).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to non route', () => {
    history.push('/non');
    render(fakeApp);

    expect(screen.getByText(/404. Requested page is not available/i)).toBeInTheDocument();
    expect(screen.getByText(/Click here to return to the Catalog page/i)).toBeInTheDocument();
  });
});
