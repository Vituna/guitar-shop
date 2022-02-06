import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

import { setErrorNoFound } from '../../store/action';
import { getGuitarsErrorStatus, getErrorNoFound } from '../../store/guitar/selectors';

import FilterPrice from '../filter-price/filter-price';
import FilterType from '../filter-type/filter-type';
import FilterString from '../filter-string/filter-string';
import GuitarsList from '../guitars-list/guitars-list';
import Pagination from '../pagination/pagination';
import ServerError from '../serverError/serverError';

function Main() {
  const dispatch = useDispatch();

  const isError = useSelector(getGuitarsErrorStatus);
  const errorNoFound = useSelector(getErrorNoFound);

  useEffect(() => {
    if (errorNoFound) {
      dispatch(setErrorNoFound(false));
    }
  }, [dispatch, errorNoFound]);

  if (isError) {
    return  <ServerError />;
  }

  return(
    <div className="wrapper">
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link" href="!#">Каталог</a>
            </li>
          </ul>
          <div className="catalog">
            <form className="catalog-filter">
              <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
              <FilterPrice />
              <FilterType />
              <FilterString />
            </form>

            <GuitarsList />
            <Pagination />

          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
