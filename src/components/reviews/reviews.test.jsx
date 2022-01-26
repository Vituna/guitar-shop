import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

import Reviews from './reviews';

import { mockComments } from '../../utils/test-mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store= mockStore({
  REVIEWS: {
    comments: mockComments,
    commentNew: mockComments,
  },
});

describe('Component: Search', () => {
  it('should render correctly with Reviews', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Reviews />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
    expect(screen.queryByTestId('count-value1')).not.toBeInTheDocument();
  });
});
