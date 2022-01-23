import { NameSpace } from '../root-reducer';

export const getComments = (state) => state[NameSpace.Reviews].comments;
export const getModalType = (state) => state[NameSpace.Reviews].modalType;
