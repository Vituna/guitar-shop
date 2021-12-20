export const AppRoute = {
  Main: '/',
};

export const ApiRoute = {
  Guitars: '/guitars',
};

export const SORT_TYPES = {
  Price: 'price',
  Rating: 'rating',
  ParamsName: {
    Sort: '_sort',
    Order: '_order',
  },
};

export const DIRECTION_TYPES= {
  Asc: 'asc',
  Desc: 'desc',
};

export const FILTER_PARAMS_NAME = {
  PriceLte: 'price_lte',
  PriceGte: 'price_gte',
  TypeName: 'type',
  String: 'stringCount',
};

export const GuitarType = [
  'Акустические гитары',
  'Электрогитары',
  'Укулеле',
];

export const GuitarTypeRus = {
  Acoustic: 'Акустические гитары',
  Electric: 'Электрогитары',
  Ukulele: 'Укулеле',
};

export const GuitarTypeEng = {
  Acoustic: 'acoustic',
  Electric: 'electric',
  Ukulele: 'ukulele',
};

export const GuitarTypeString = {
  [GuitarTypeEng.Acoustic]: [6, 7, 12 ],
  [GuitarTypeEng.Electric]: [4, 6, 7],
  [GuitarTypeEng.Ukulele]: [4],
};

export const AMOUNT_STRINGS_GUITAR = [4, 6, 7, 12];

