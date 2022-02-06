import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';

export const loadGuitars = createAction(
  ActionType.LoadGuitars,
  (guitars) => ({
    payload: {
      guitars,
    },
  }),
);

export const loadGuitarsFilter = createAction(
  ActionType.LoadGuitarsFilter,
  (guitarsFilter) => ({
    payload: {
      guitarsFilter,
    },
  }),
);

export const loadGuitarsPrice = createAction(
  ActionType.LoadGuitarsPrice,
  (guitarsPrice) => ({
    payload: {
      guitarsPrice,
    },
  }),
);

export const changeCurrentSearch = createAction(
  ActionType.ChangeSearch,
  (currentSearch) => (
    {payload: currentSearch}
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

export const loadGuitarsCountPagination = createAction(
  ActionType.LoadGuitarsCountPagination,
  (guitarsCount) => (
    {payload:
      guitarsCount}
  ),
);

export const setComments = createAction(
  ActionType.SetComments,
  (comments) => (
    {payload: comments}
  ),
);
export const setCommentNew = createAction(
  ActionType.SetCommentNew,
  (comment) => (
    {payload: comment}
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

export const loadFilterPricce = createAction(
  ActionType.LoadFilterPricce,
  (isloadFilterPricce) => (
    {payload: isloadFilterPricce}
  ),
);

export const loadingCurrentGuitar = createAction(ActionType.LoadingCurrentGuitar);

export const setGuitarsError = createAction(ActionType.SetGuitarsError, (isError) => ({payload: isError}));

export const setModalType = createAction(
  ActionType.SetModalType,
  (modalType) => (
    {payload: modalType}
  ),
);

export const setGuitarAddModal = createAction(
  ActionType.SetGuitarAddModal,
  (guitarAdd) => (
    {payload: {guitarAdd}}
  ),
);
export const setGuitarAddBasket = createAction(
  ActionType.SetGuitarAddBasket,
  (guitarAddBasket) => (
    {payload: {guitarAddBasket}}
  ),
);

export const setCommentPostStatus = createAction(
  ActionType.SetCommentPostStatus,
  (commentPostStatus) => (
    {payload: commentPostStatus}
  ),
);

export const setErrorNoFound = createAction(
  ActionType.SetErrorNoFound,
  (errorNoFound) => (
    {payload: errorNoFound}
  ),
);

export const setDiscountGuitar = createAction(
  ActionType.SetDiscountGuitar,
  (discountGuitar) => (
    {payload: {discountGuitar}}
  ),
);

export const setCouponPostStatus = createAction(
  ActionType.SetCouponPostStatus,
  (couponStatus) => (
    {payload: {couponStatus}}
  ),
);

