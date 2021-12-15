import { NameSpace } from '../root-reducer';

export const getGuitars = (state) => state[NameSpace.Guitars].guitars;
