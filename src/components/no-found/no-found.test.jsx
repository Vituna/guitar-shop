import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NoFound from './no-found';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';

describe('Component: NotFound', () => {
  const mockStore = configureMockStore();
  const store= mockStore({
    DATA: {similarGuitarCards : []},
  });
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <NoFound />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/404. Requested page is not available/i)).toBeInTheDocument();
    expect(screen.getByText(/Click here to return to the main page/i)).toBeInTheDocument();

  });
});
