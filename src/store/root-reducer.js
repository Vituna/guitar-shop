import { combineReducers } from 'redux';

import { guitars } from './guitar/guitar';
import { filter } from './filters/filtres';

export const NameSpace = {
  Guitars: 'GUITARS',
  Filter: 'FILTER',
};

export const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitars,
  [NameSpace.Filter]: filter,
});
