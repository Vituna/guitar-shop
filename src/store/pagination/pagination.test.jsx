import { currentNumberPage, loadGuitarsPagination } from '../action';

import { pagination } from './pagination';

import { mockGuitars } from '../../utils/test-mocks';

const state = {
  currentPage: 1,
  guitars: [],
};

describe('Reducer: Pagination', () => {

  it('should update currentNumberPage', () => {
    expect(pagination(state, currentNumberPage(2)))
      .toEqual({
        currentPage: 2,
        guitars: [],
      });
  });
  it('should update loadGuitarsPagination', () => {
    expect(pagination(state, loadGuitarsPagination(mockGuitars)))
      .toEqual({
        currentPage: 1,
        guitars: mockGuitars,
      });
  });
});
