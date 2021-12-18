import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';

export const loadGuitars= createAction(
  ActionType.LoadGuitars,
  (guitars) => ({
    payload: {
      guitars,
    },
  }),
);

export const changeCurrentSearch = createAction(
  ActionType.ChangeSearch,
  (filter) => (
    {payload: {filter}}
  ),
);

export const loadCurrentGuitar = createAction(
  ActionType.LoadCurrentGuitar,
  (guitar) => ({
    payload: {
      guitar,
    },
  }),
);

export const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sort) => (
    {payload: {sort}}
  ),
);

export const changeDirectionType = createAction(
  ActionType.ChangeDirectionType,
  (direction) => (
    {payload: {direction}}
  ),
);


export const loadGuitarRequest = createAction(ActionType.LoadGuitarRequest);
