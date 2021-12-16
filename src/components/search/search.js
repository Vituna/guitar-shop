/* eslint-disable no-console */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGuitars } from '../../store/guitar/selectors';
import { changeCurrentSearch } from '../../store/action';

import { getFilterGuitarsName } from '../../utils';
import { Link } from 'react-router-dom';

function Search() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitars);

  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
    dispatch(changeCurrentSearch(inputValue));

    if (e.target.value.length >= 1 ) {
      setOpenSearch(true);
    } else {(setOpenSearch(false));}
  };

  const handleClickGuitarName = (name) => {
    setInputValue(name);
    dispatch(changeCurrentSearch(name));
    inputValue === name ? setOpenSearch(false) : setOpenSearch(true);
  };

  return (
    <div className="form-search">
      <form className="form-search__form" onChange={handleChangeInput}>
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true" >
            <use href="#icon-search"></use>
          </svg>
          <span className="visually-hidden">Начать поиск</span>
        </button>
        <input className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?" value={inputValue} />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul  className={`form-search__select-list ${openSearch ? '' : 'hidden'}`} style={{ zIndex: 2 }}>
        {getFilterGuitarsName(guitars, inputValue).map((option, i) => (
          <Link to={`/guitars/${option.id}`} className="form-search__select-item" key={`${option.id}`}>
            <li className="form-search__select-item" tabIndex={0} key={`${option.name + i}`} onClick={() => handleClickGuitarName(option.name)}>{option.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Search;
