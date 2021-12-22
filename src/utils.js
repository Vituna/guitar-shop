import { SORT_TYPES, FILTER_PARAMS_NAME, GuitarTypeRus, PAGINATION_PARAMS_NAME } from './const';

export const getFilterGuitarsName = (guitars, inputValue) => guitars.filter((guitar) => guitar.name.toLowerCase().includes(inputValue.toLowerCase()));

export const getSortParams = (sort, order, minPrice, maxPrice, filterType, filterString, paginationStart, limitCards) => ({
  [SORT_TYPES.ParamsName.Sort]: sort,
  [SORT_TYPES.ParamsName.Order]: order,
  [FILTER_PARAMS_NAME.PriceGte]: minPrice,
  [FILTER_PARAMS_NAME.PriceLte]: maxPrice,
  [FILTER_PARAMS_NAME.TypeName]: filterType,
  [FILTER_PARAMS_NAME.String]: filterString,
  [PAGINATION_PARAMS_NAME.Start]: paginationStart,
  // [PAGINATION_PARAMS_NAME.End]: paginationEnd,
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
