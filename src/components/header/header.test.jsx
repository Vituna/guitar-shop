import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Route, Switch } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { createApi } from '../../services/api';
import Header from './header';

import { AppRoute } from '../../const';


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
          <Switch>
            <Route exact path={AppRoute.Main}>
              {'Main Page Test Text'}
            </Route>
          </Switch>
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Где купить?/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();

    const linkToMain = screen.getByAltText(/Логотип/i);
    expect(linkToMain).toBeInTheDocument();

    userEvent.click(linkToMain);

  });
});
