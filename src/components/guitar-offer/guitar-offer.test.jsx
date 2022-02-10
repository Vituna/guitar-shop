import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

import GuitarOffer from './guitar-offer';

import { mockGuitar } from '../../utils/test-mocks';

const history = createMemoryHistory();

const mockStore = configureMockStore([thunk]);


describe('Component: GuitarOffer', () => {

  const store= mockStore({
    BASKET: {
      guitarIdAndCount: {1:2},
    },
  });


  it('should render correctly', () => {
    render(
      <Provider store={store}>

        <Router history={history}>
          <GuitarOffer guitar={mockGuitar}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Цена:/)).toBeInTheDocument();
  });
});
