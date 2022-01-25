import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';

import { createApi } from '../../services/api';
import Header from './header';

import { mockGuitars } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: Header', () => {

  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store = mockStore({
    GUITARS: {
      guitars : mockGuitars,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Где купить?/)).toBeInTheDocument();
  });
});
