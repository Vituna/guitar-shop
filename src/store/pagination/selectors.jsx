import { NameSpace } from '../root-reducer';

export const getCurrentNumberPage = (state) => state[NameSpace.Pagination].currentPage;
export const getGuitarsPagination = (state) => state[NameSpace.Pagination].guitarsCount;

export const getLimit = (state) => state[NameSpace.Pagination].limit;
