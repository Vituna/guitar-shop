import { currentNumberPage, loadGuitarsCountPagination } from '../action';

import { pagination } from './pagination';

const state = {
  currentPage: 1,
  guitarsCount: 27,
  limit: 9,
};

describe('Reducer: Pagination', () => {

  it('should update currentNumberPage', () => {
    expect(pagination(state, currentNumberPage(2)))
      .toEqual({
        currentPage: 2,
        guitarsCount: 27,
        limit: 9,
      });
  });
  it('should update loadGuitarsCountPagination', () => {
    expect(pagination(state, loadGuitarsCountPagination(9)))
      .toEqual({
        currentPage: 1,
        guitarsCount: 9,
        limit: 9,
      });
  });
});
