import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createApi } from '../../services/api';
import thunk from 'redux-thunk';
import { mockGuitars, mockGuitar } from '../../utils/test-mocks';
import App from './app';
import { AppRoute, SORT_TYPES } from '../../const';

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

  const fakeApp = (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByText(/404. Requested page is not available/)).toBeInTheDocument();
  });

  it('should render "GuitarScreen" when user navigate to "/guitars/:id"', () => {
    history.push('/guitars/1');
    render(fakeApp);

    expect(screen.getByText(/Количество струн/)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText(/404. Requested page is not available/i)).toBeInTheDocument();
    expect(screen.getByText(/Click here to return to the main page/i)).toBeInTheDocument();
  });

});
