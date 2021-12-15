/* eslint-disable no-console */
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { getGuitars } from '../../store/guitar/selectors';


function Search() {
  const guitars = useSelector(getGuitars);
  const searchRef = useRef(null);

  const handleChangeInput = () => {
    if (searchRef.current !== null) {
      const enteredValue = searchRef.current.value;

      guitars.map((guitar) => {
        // console.log(guitar.name);
        // console.log(enteredValue);

        if (guitar.name === enteredValue) {
          console.log(enteredValue);
        }
      });

    }
  };

  return (
    <div className="form-search">
      <form className="form-search__form" onChange={handleChangeInput}>
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use href="#icon-search"></use>
          </svg>
          <span className="visually-hidden">Начать поиск</span>
        </button>
        <input ref={searchRef} className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?" />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className="form-search__select-list ">
        <li className="form-search__select-item hidden" tabIndex="1">Четстер Plus</li>
        <li className="form-search__select-item" tabIndex="0">Четстер UX</li>
        <li className="form-search__select-item" tabIndex="0">Четстер UX2</li>
        <li className="form-search__select-item" tabIndex="0">Четстер UX3</li>
        <li className="form-search__select-item" tabIndex="0">Четстер UX4</li>
        <li className="form-search__select-item" tabIndex="0">Четстер UX5</li>
      </ul>
    </div>
  );
}

export default Search;
