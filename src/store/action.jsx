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

export const loadGuitarsFilter= createAction(
  ActionType.LoadGuitarsFilter,
  (guitarsFilter) => ({
    payload: {
      guitarsFilter,
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

export const changeMinPrice = createAction(
  ActionType.ChangeMinPrice,
  (minPice) => (
    {payload: minPice}
  ),
);

export const changeMaxPrice = createAction(
  ActionType.ChangeMaxPrice,
  (maxPrice) => (
    {payload: maxPrice}
  ),
);

export const changeTypeFilter = createAction(
  ActionType.ChangeTypeFilter,
  (typeFilter) => (
    {payload: typeFilter}
  ),
);

export const changeStringFilter = createAction(
  ActionType.ChangeStringFilter,
  (stringFilter) => (
    {payload: stringFilter}
  ),
);

export const currentNumberPage = createAction(
  ActionType.CurrentNumberPage,
  (currentPage) => ({
    payload:
      currentPage,

  }),
);

export const loadGuitarsPagination = createAction(
  ActionType.LoadGuitarsPagination,
  (guitars) => (
    {payload:
      guitars}
  ),
);

export const setComments = createAction(
  ActionType.SetComments,
  (comments) => (
    {payload: comments}
  ),
);

export const setLimit = createAction(ActionType.SetLimit,
  (limit) => (
    {payload: limit}
  ),
);

export const loadGuitarRequest = createAction(ActionType.LoadGuitarRequest);

export const noLoadingUrl = createAction(ActionType.NoLoadingUrl);

export const loadOffersStart = () => ({
  type: ActionType.LoadOffersStart,
});

export const loadFilterGuitars = createAction(ActionType.LoadFilterGuitars);
export const loadingCurrentGuitar = createAction(ActionType.LoadingCurrentGuitar);

export const setGuitarsError = createAction(ActionType.SetGuitarsError, (status) => ({payload: status}));
