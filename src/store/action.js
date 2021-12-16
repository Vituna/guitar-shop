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

export const loadGuitarRequest = createAction(ActionType.LoadGuitarRequest);
