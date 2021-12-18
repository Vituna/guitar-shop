import { NameSpace } from '../root-reducer';

export const getSortType = (state) => state[NameSpace.Sort].sortType;
export const getDirectionType = (state) => state[NameSpace.Sort].directionType;
