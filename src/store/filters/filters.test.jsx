import { changeMinPrice, changeMaxPrice, changeTypeFilter, changeStringFilter } from '../action';

import { filter } from './filtres';

const state = {
  currentSearch: '',
  minPrice: null,
  maxPrice: null,
  typeFilter: [],
  stringFilter: [],
};

describe('Reducer: Filters', () => {

  it('should update minPrice', () => {
    expect(filter(state, changeMinPrice(200)))
      .toEqual({
        currentSearch: '',
        minPrice: 200,
        maxPrice: null,
        typeFilter: [],
        stringFilter: [],
      });
  });
  it('should update MaxPrice', () => {
    expect(filter(state, changeMaxPrice(35000)))
      .toEqual({
        currentSearch: '',
        minPrice: null,
        maxPrice: 35000,
        typeFilter: [],
        stringFilter: [],
      });
  });
  it('should update changeTypeFilter', () => {
    expect(filter(state, changeTypeFilter('acoustic')))
      .toEqual({
        currentSearch: '',
        minPrice: null,
        maxPrice: null,
        typeFilter: 'acoustic',
        stringFilter: [],
      });
  });
  it('should update changeStringFilter', () => {
    expect(filter(state, changeStringFilter(6)))
      .toEqual({
        currentSearch: '',
        minPrice: null,
        maxPrice: null,
        typeFilter: [],
        stringFilter: 6,
      });
  });
});
