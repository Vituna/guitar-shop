import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import GuitarOffer from './guitar-offer';

import { mockGuitar } from '../../utils/test-mocks';

const history = createMemoryHistory();

describe('Component: Guitar Offer', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <GuitarOffer guitar={mockGuitar}/>
      </Router>,
    );

    expect(screen.getByText(/Цена:/)).toBeInTheDocument();
  });

});
