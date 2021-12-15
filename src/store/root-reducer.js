import { combineReducers } from 'redux';

import { guitars } from './guitar/guitar';

export const NameSpace = {
  Guitars: 'GUITARS',
};

export const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitars,
});
