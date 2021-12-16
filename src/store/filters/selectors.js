import { NameSpace } from '../root-reducer';

export const getCurrentSearch = (state) => state[NameSpace.Filter].currentSearch;
