import { combineReducers } from 'redux';

import { guitars } from './guitar/guitar';
import { filter } from './filters/filtres';
import { sort } from './sort/sort';
import { pagination } from './pagination/pagination';
import { reviews } from './reviews/reviews';

export const NameSpace = {
  Guitars: 'GUITARS',
  Filter: 'FILTER',
  Sort: 'SORT',
  Pagination: 'PAGINATUON',
  Reviews: 'REVIEWS',
};

export const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitars,
  [NameSpace.Filter]: filter,
  [NameSpace.Sort]: sort,
  [NameSpace.Pagination]: pagination,
  [NameSpace.Reviews]: reviews,
});
