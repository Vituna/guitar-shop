import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';

import Pagination from './pagination';

import { mockGuitars } from '../../utils/test-mocks';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    number: '1',
  }),
}));

describe('Component: Pagination', () => {
  const mockStore = configureMockStore();
  it('should render correctly with cards total count > 2', () => {
    const store = mockStore({
      PAGINATUON: {
        currentPage: '5',
        guitars: mockGuitars,
      },
    });

    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Pagination />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText('Далее')).toBeInTheDocument();
  });

  it('should render correctly with cards total count = 1', () => {
    const store= mockStore({
      PAGINATUON: {
        currentPage: 1,
        guitars: mockGuitars,
      },
    });

    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Pagination />
        </Router>,
      </Provider>,
    );

    expect(screen.queryByText('Далее')).not.toBeInTheDocument();
  });
});
