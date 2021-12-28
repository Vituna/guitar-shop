import { NameSpace } from '../root-reducer';

export const getGuitars = (state) => state[NameSpace.Guitars].guitars;
export const getGuitar = (state) => state[NameSpace.Guitars].guitar;
export const getGuitarLoading = (state) => state[NameSpace.Guitars].guitarLoading;
export const getGuitarsFilter = (state) => state[NameSpace.Guitars].guitarsFilter;
export const getGuitarsLoadingStatus = (state) => state[NameSpace.Guitars].isLoading;
export const getComments = (state) => state[NameSpace.Guitars].comments;
