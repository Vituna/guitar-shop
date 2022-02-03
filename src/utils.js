import { SORT_TYPES, FILTER_PARAMS_NAME, GuitarTypeRus, PAGINATION_PARAMS_NAME, DIRECTION_TYPES, GuitarTypeRusModal, cartKey } from './const';

import { changeTypeFilter, changeStringFilter, changeMaxPrice, changeMinPrice, changeSortType, changeDirectionType, currentNumberPage } from './store/action';

export const getFilterGuitarsName = (guitars, inputValue) => guitars && guitars.filter((guitar) => guitar.name.toLowerCase().startsWith(inputValue.toLowerCase()));

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

export const getTranslationGuitarTypeRus = (name) => {
  switch (name) {
    case 'acoustic':
      return GuitarTypeRusModal.Acoustic;
    case 'electric':
      return GuitarTypeRusModal.Electric;
    case 'ukulele':
      return GuitarTypeRusModal.Ukulele;
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
  if (sort && (sort === SORT_TYPES.Price || sort === SORT_TYPES.Rating)) {
    dispatch(changeSortType(sort));
  }

  const order = params[SORT_TYPES.ParamsName.Order];
  if (order && (order === DIRECTION_TYPES.Asc || order === DIRECTION_TYPES.Desc)) {
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

export const getTypeNameUpperCase = (nameTypeGuitar) => nameTypeGuitar.charAt(0).toUpperCase() + nameTypeGuitar.slice(1);

export const getFormatDateValue = (date) => new Date(date).toLocaleDateString('ru-RU', {day: 'numeric', month: 'long'});

export const setGuitarsStorage = (cartGuitars) => localStorage.setItem(cartKey, JSON.stringify(cartGuitars));

export const getGuitarsStorage = () => {
  const guitarsString = localStorage.getItem(cartKey);
  const guitars = guitarsString ? JSON.parse(guitarsString) : [];
  return guitars;
};

export const getSimilarIndexGuitar = (guitars, guitar) => guitars.findIndex((newGuitar) => newGuitar.guitar.vendorCode === guitar.guitar.vendorCode);

export const getPriceSeparator = (price) => price.toString().split('').reverse().map((el, index) => index % 3 !== 2 ? el : ` ${el}`).reverse().join('');

export const getFullPrice = (guitars) => guitars.reduce((acc, item) => acc + item.count * item.guitar.price , 0);

export const getFullPriceSeparator = (guitars) => {
  const fullPrice = getFullPrice(guitars);
  return getPriceSeparator(fullPrice);
};

export const getAmountDiscount = (guitars, discount) => {
  const fullPrice = guitars.reduce((acc, item) => acc + item.count * item.guitar.price , 0);
  if (discount > 0) {
    const amountDiscount = fullPrice * discount / 100;
    return amountDiscount;
  } return 0;
};

export const getGuitarPlus = (guitar, guitarsAdd ) => {
  const guitars = [...guitarsAdd];
  const index = getSimilarIndexGuitar(guitars, guitar);
  if (index !== -1) {
    if (guitars[index].count === 99) {
      return guitars;
    }
    guitars[index] = {...guitars[index], count: guitars[index].count + 1 };
  }
  return guitars;
};

export const grtGuitarMinus = (guitar, guitarsAdd) => {
  const guitars = [...guitarsAdd];
  const index = getSimilarIndexGuitar(guitars, guitar);

  if (index !== -1) {
    guitars[index] = {...guitars[index], count: guitars[index].count - 1 };
  }
  return guitars;
};

export const getGuitarChangeValue = (guitar, count, guitarsAdd) => {
  const index = getSimilarIndexGuitar(guitarsAdd, guitar);

  if (index === -1 || count < 0 || count > 99) {
    return guitarsAdd;
  }
  const guitarIndex = guitarsAdd[index];
  const guitarIndexCount = {...guitarIndex, count};
  return [...guitarsAdd.slice(0, index), guitarIndexCount, ...guitarsAdd.slice(index + 1)];
};

export const getMessageValidityPromo = (couponStatus) => {
  switch (couponStatus) {
    case true:
      return <p className='form-input__message form-input__message--success'>Промокод принят</p>;
    case false:
      return <p className='form-input__message form-input__message--error'>неверный промокод</p>;
    default:
      return '';
  }
};
