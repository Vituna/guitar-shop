import { changeSortType, changeDirectionType } from '../action';

import { sort } from './sort';

import { SORT_TYPES } from '../../const';

const state = {
  sortType: SORT_TYPES.Price,
  directionType: SORT_TYPES.Rating,
};

describe('Reducer: Sort', () => {

  it('should update changeSortType', () => {
    expect(sort(state, changeSortType(SORT_TYPES.Rating)))
      .toEqual({
        sortType: SORT_TYPES.Rating,
        directionType: SORT_TYPES.Rating,
      });
  });
  it('should update changeDirectionType', () => {
    expect(sort(state, changeDirectionType(SORT_TYPES.Price)))
      .toEqual({
        sortType: SORT_TYPES.Price,
        directionType: SORT_TYPES.Price,
      });
  });
});
