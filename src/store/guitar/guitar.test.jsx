import { loadGuitars, loadGuitarsFilter, loadCurrentGuitar } from '../action';

import { guitars } from './guitar';

import { mockGuitars, mockGuitar } from '../../utils/test-mocks';

const state = {
  guitars: [],
  guitarsFilter: [],
  comments: [],
  guitar: null,
  guitarLoading: false,
  isLoading: true,
};

describe('Reducer: Guitars', () => {

  it('should update loadGuitars', () => {
    expect(guitars(state, loadGuitars(mockGuitars)))
      .toEqual({
        guitars: mockGuitars,
        guitarsFilter: [],
        comments: [],
        guitar: null,
        guitarLoading: false,
        isLoading: true,
      });
  });
  it('should update loadGuitarsFilter', () => {
    expect(guitars(state, loadGuitarsFilter(mockGuitars)))
      .toEqual({
        guitars: [],
        guitarsFilter: mockGuitars,
        comments: [],
        guitar: null,
        guitarLoading: false,
        isLoading: false,
      });
  });
  it('should update loadCurrentGuitar', () => {
    expect(guitars(state, loadCurrentGuitar(mockGuitar)))
      .toEqual({
        guitars: [],
        guitarsFilter: [],
        comments: [],
        guitar: mockGuitar,
        guitarLoading: false,
        isLoading: true,
        questLoading: false,
      });
  });
});
