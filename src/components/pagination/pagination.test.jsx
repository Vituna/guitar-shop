import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';

import Pagination from './pagination';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    number: '1',
  }),
}));

describe('Component: Pagination', () => {
  const mockStore = configureMockStore();
  it('should render correctly with cards total count > 20', () => {
    const store = mockStore({
      PAGINATUON: {
        currentPage: 1,
        guitarsCount: 22,
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
    expect(screen.getByRole('list').childNodes).toHaveLength(5);
    expect(screen.getByText('Далее')).toBeInTheDocument();
  });

  it('should render correctly currentPage 3', () => {
    const store= mockStore({
      PAGINATUON: {
        currentPage: 3,
        guitarsCount: 27,
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

    const linkItems = screen.getAllByRole('listitem');
    expect(linkItems.length).toEqual(5);
    // expect(screen.queryByText('Назад')).toBeInTheDocument();

    expect(screen.getByText('Назад')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.queryByText('Далее')).not.toBeInTheDocument();  });
  it('should render correctly with cards total count = 8', () => {
    const store= mockStore({
      PAGINATUON: {
        currentPage: 1,
        guitarsCount: 8,
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

    expect(screen.getByRole('list').childNodes).toHaveLength(3);
  });
});
