import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

import Search from './search';

import { mockGuitars } from '../../utils/test-mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store= mockStore({
  GUITARS: {
    guitars : mockGuitars,
    guitarsFilter: [],
  },
});

describe('Component: Search', () => {
  it('should render correctly with guitar cards', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Search />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Начать поиск/i)).toBeInTheDocument();
    expect(screen.getByRole('list').childNodes).toHaveLength(mockGuitars.length);
  });
});
