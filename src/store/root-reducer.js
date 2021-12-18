import { combineReducers } from 'redux';

import { guitars } from './guitar/guitar';
import { filter } from './filters/filtres';
import { sort } from './sort/sort';

export const NameSpace = {
  Guitars: 'GUITARS',
  Filter: 'FILTER',
  Sort: 'SORT',
};

export const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitars,
  [NameSpace.Filter]: filter,
  [NameSpace.Sort]: sort,
});
