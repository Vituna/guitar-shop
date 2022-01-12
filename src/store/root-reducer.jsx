import { combineReducers } from 'redux';

import { guitars } from './guitar/guitar';
import { filter } from './filters/filtres';
import { sort } from './sort/sort';
import { pagination } from './pagination/pagination';

export const NameSpace = {
  Guitars: 'GUITARS',
  Filter: 'FILTER',
  Sort: 'SORT',
  Pagination: 'PAGINATUON',
};

export const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitars,
  [NameSpace.Filter]: filter,
  [NameSpace.Sort]: sort,
  [NameSpace.Pagination]: pagination,
});
