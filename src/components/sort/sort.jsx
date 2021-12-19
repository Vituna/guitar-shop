import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeSortType, changeDirectionType } from '../../store/action';
import { SORT_TYPES, DIRECTION_TYPES } from '../../const';

function Sort() {
  const dispatch = useDispatch();

  const [typeSort, setTypeSort] = useState(null);
  const [typeDirection, setTypeDirection] = useState(null);

  dispatch(changeSortType(typeSort));
  dispatch(changeDirectionType(typeDirection));

  const handleChangeTypeSort = (type) => {
    setTypeSort(type);
  };

  const handleChangeDirection = (type) => {
    setTypeDirection(type);
    if (typeSort === null) {
      setTypeSort(SORT_TYPES.Price);
    }
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button className={`catalog-sort__type-button ${typeSort === SORT_TYPES.Price ? 'catalog-sort__type-button--active' : ''}`}  aria-label="по цене" tabIndex="-1" onClick={() => handleChangeTypeSort(SORT_TYPES.Price)}>по цене</button>
        <button className={`catalog-sort__type-button ${typeSort === SORT_TYPES.Rating ? 'catalog-sort__type-button--active' : ''}`} aria-label="по популярности" onClick={() => handleChangeTypeSort(SORT_TYPES.Rating)}>по популярности</button>
      </div>
      <div className="catalog-sort__order">
        <button className={`catalog-sort__order-button catalog-sort__order-button--up ${typeDirection === DIRECTION_TYPES.Asc ? 'catalog-sort__type-button--active' : ''}`}  aria-label="По возрастанию" tabIndex="-1" onClick={() => handleChangeDirection(DIRECTION_TYPES.Asc)}></button>
        <button className={`catalog-sort__order-button catalog-sort__order-button--down ${typeDirection === DIRECTION_TYPES.Desc ? 'catalog-sort__type-button--active' : ''}`} aria-label="По убыванию" onClick={() => handleChangeDirection(DIRECTION_TYPES.Desc)}></button>
      </div>
    </div>
  );
}

export default Sort;
