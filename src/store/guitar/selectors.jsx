import { NameSpace } from '../root-reducer';

export const getGuitars = (state) => state[NameSpace.Guitars].guitars;
export const getGuitar = (state) => state[NameSpace.Guitars].guitar;
export const getGuitarLoading = (state) => state[NameSpace.Guitars].guitarLoading;
export const getGuitarsFilter = (state) => state[NameSpace.Guitars].guitarsFilter;
export const getLoadingGuitarsFilter = (state) => state[NameSpace.Guitars].isLoadingFilter;
export const getLoadingUrlStatus = (state) => state[NameSpace.Guitars].loadingUrl;
export const getGuitarsErrorStatus = (state) => state[NameSpace.Guitars].isError;
export const getErrorNoFound = (state) => state[NameSpace.Guitars].errorNoFound;
export const getGuitarAdd = (state) => state[NameSpace.Guitars].guitarAdd;
