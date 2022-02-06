import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';

import { createApi } from '../../services/api';
import Footer from './footer';


const history = createMemoryHistory();

describe('Component: Footer', () => {

  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store = mockStore();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Footer />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Где купить?/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
  });
});
