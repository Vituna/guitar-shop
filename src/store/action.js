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

