import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';

import ServerError from './serverError';

describe('Component: serverError', () => {
  const mockStore = configureMockStore();
  const store= mockStore({
    DATA: {similarGuitarCards : []},
  });
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <ServerError />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Error: Network Error/i)).toBeInTheDocument();

  });
});
