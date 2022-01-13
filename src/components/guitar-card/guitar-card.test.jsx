import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import GuitarCard from './guitar-card';
import { createApi } from '../../services/api';

import { mockGuitars, mockGuitar } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: GuitarCard', () => {
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store= mockStore({
    GUITARS: {
      guitars : mockGuitars,
      guitarsFilter: [],
      guitar: mockGuitar,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <GuitarCard />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
  });
});
