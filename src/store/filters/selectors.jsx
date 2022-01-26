import { NameSpace } from '../root-reducer';

export const getCurrentSearch = (state) => state[NameSpace.Filter].currentSearch;
export const getMinPrice= (state) => state[NameSpace.Filter].minPrice;
export const getMaxPrice = (state) => state[NameSpace.Filter].maxPrice;
export const getTypeFilter = (state) => state[NameSpace.Filter].typeFilter;
export const getStringFilter = (state) => state[NameSpace.Filter].stringFilter;
export const getIsLoadingFilter = (state) => state[NameSpace.Filter].isloadFilterPricce;
export const getGuitarsPrice = (state) => state[NameSpace.Filter].guitarsPrice;
