import { loadGuitars, loadGuitarsFilter, loadCurrentGuitar } from '../action';

import { guitars } from './guitar';

import { mockGuitars, mockGuitar } from '../../utils/test-mocks';

const state = {
  guitars: [],
  guitarsFilter: [],
  guitarAdd: [],
  guitar: null,
  guitarLoading: false,
  isLoadingFilter: true,
  isError: false,
  loadingUrl: true,
  errorNoFound: false,
};

describe('Reducer: Guitars', () => {

  it('should update loadGuitars', () => {
    expect(guitars(state, loadGuitars(mockGuitars)))
      .toEqual({
        guitars: mockGuitars,
        guitarsFilter: [],
        guitarAdd: [],
        guitar: null,
        guitarLoading: false,
        isLoadingFilter: true,
        isError: false,
        loadingUrl: true,
        errorNoFound: false,
      });
  });
  it('should update loadGuitarsFilter', () => {
    expect(guitars(state, loadGuitarsFilter(mockGuitars)))
      .toEqual({
        guitars: [],
        guitarsFilter: mockGuitars,
        guitarAdd: [],
        guitar: null,
        guitarLoading: false,
        isLoadingFilter: false,
        isError: false,
        loadingUrl: true,
        errorNoFound: false,
      });
  });
  it('should update loadCurrentGuitar', () => {
    expect(guitars(state, loadCurrentGuitar(mockGuitar)))
      .toEqual({
        guitars: [],
        guitarsFilter: [],
        guitarAdd: [],
        guitar: mockGuitar,
        guitarLoading: false,
        isLoadingFilter: true,
        isError: false,
        loadingUrl: true,
        errorNoFound: false,
      });
  });
});
