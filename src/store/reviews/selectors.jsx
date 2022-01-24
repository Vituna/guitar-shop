import { NameSpace } from '../root-reducer';

export const getComments = (state) => state[NameSpace.Reviews].comments;
export const getModalType = (state) => state[NameSpace.Reviews].modalType;
export const getCommentNew = (state) => state[NameSpace.Reviews].commentNew;
export const getCommentPostStatus = (state) => state[NameSpace.Reviews].commentPostStatus;
