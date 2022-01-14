/* eslint-disable no-console */
import { SORT_TYPES, FILTER_PARAMS_NAME, GuitarTypeRus, PAGINATION_PARAMS_NAME } from './const';

import { changeTypeFilter, changeStringFilter, changeMaxPrice, changeMinPrice, changeSortType, changeDirectionType, currentNumberPage } from './store/action';

export const getFilterGuitarsName = (guitars, inputValue) => guitars.filter((guitar) => guitar.name.toLowerCase().includes(inputValue.toLowerCase()));

const getString = (type, string) => string ? ({[type]: `${string}`}) : {};

export const getAllParams = (sort, order, minPrice, maxPrice, filterType, filterString, paginationStart, limitCards) => ({
  [SORT_TYPES.ParamsName.Sort]: sort,
  [SORT_TYPES.ParamsName.Order]: order,
  ...getString(FILTER_PARAMS_NAME.PriceGte, minPrice),
  ...getString(FILTER_PARAMS_NAME.PriceLte, maxPrice),
  [FILTER_PARAMS_NAME.TypeName]: filterType,
  [FILTER_PARAMS_NAME.String]: filterString,
  [PAGINATION_PARAMS_NAME.Start]: paginationStart,
  [PAGINATION_PARAMS_NAME.Limit]: limitCards,
});

export const getMinMaxPricesGuitars = (guitars) => {
  const prices = guitars.map((guitar) => guitar.price);
  const minPrices = Math.min(...prices);
  const maxPrices = Math.max(...prices);

  return {minPrices, maxPrices};
};

export const getTranslationGuitarType = (name) => {
  switch (name) {
    case GuitarTypeRus.Acoustic:
      return 'acoustic';
    case GuitarTypeRus.Electric:
      return 'electric';
    case GuitarTypeRus.Ukulele:
      return 'ukulele';
    default:
      return '';
  }
};

export const urlChangeParams = (params, dispatch) => {
  const maxPrice = params[FILTER_PARAMS_NAME.PriceLte];
  if (maxPrice) {
    const price = maxPrice;
    dispatch(changeMaxPrice(+price));
  }

  const minPrice = params[FILTER_PARAMS_NAME.PriceGte];
  if (minPrice) {
    const price = minPrice;
    dispatch(changeMinPrice(price));
  }

  const types = params[FILTER_PARAMS_NAME.TypeName];
  if (types) {
    const value = typeof types === 'string' ? [types] : types;
    dispatch(changeTypeFilter(value));
  }

  const stringCount = params[FILTER_PARAMS_NAME.String];
  if (stringCount) {
    const value = typeof stringCount === 'string' ? [+stringCount] : stringCount.map((item) => +item);
    dispatch(changeStringFilter(value));
  }

  const sort = params[SORT_TYPES.ParamsName.Sort];
  if (sort) {
    dispatch(changeSortType(sort));
  }

  const order = params[SORT_TYPES.ParamsName.Order];
  if (order) {
    dispatch(changeDirectionType(order));
  }

  const start = params[PAGINATION_PARAMS_NAME.Start];
  if (start) {
    const startStr = start;
    const page = startStr / 9 + 1;
    dispatch(currentNumberPage(page));
  }
};

export const getParamsReduce = (params) => params.reduce((acc, param) => ({...acc, ...param}) , {});

export const changePageUrl = (params, dispatch) => {
  const keyUrl = Object.keys(params);
  const page = keyUrl.join();
  dispatch(currentNumberPage(Number(page)));
};
