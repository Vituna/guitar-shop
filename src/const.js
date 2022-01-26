export const AppRoute = {
  Main: '/',
  CatalogPage: '/catalog/page_:number/',
  Guitars: '/guitars',
};

export const ApiRoute = {
  Guitars: '/guitars',
  Comments: '/comments',
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

export const PAGINATION_PARAMS_NAME = {
  Start: '_start',
  End: '_end',
  Limit: '_limit',
};

export const EMBED = {
  Embed: '_embed',
  Comment: 'comments',
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

export const GuitarTypeRusModal = {
  Acoustic: 'Акустическая гитара',
  Electric: 'Электрогитара',
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

export const STAR_COUNT = 5;
export const LIMIT_CARDS = 9;
export const MAX_NUMBER_PAGES = 3;
export const MAX_GUITAR_CARDS = 9;

export const STARS = [
  {value: 5, name: 'Отлично'},
  {value: 4, name: 'Хорошо'},
  {value: 3, name: 'Нормально'},
  {value: 2, name: 'Плохо'},
  {value: 1, name: 'Ужасно'},
];

export const TypeModal = {
  OpenFormReviews: 'OpenFormReviews',
  CloseFormReviews: 'CloseFormReviews',
  CloseSuccessReviews: 'CloseSuccessReviews',
  OpenSuccessReviews: 'OpenSuccessReviews',
  OpenCartAdd: 'OpenCartAdd',
  CloseCartAdd: 'CloseCartAdd',
};

export const CommentPostStatus = {
  Pristine: 'PRISTINE',
  Posting: 'POSTING',
  Posted: 'POSTED',
  NotPosted: 'NOT_POSTED',
};

export const Tabs = {
  Characteristic: 'Characteristic',
  Description: 'Description',
};
