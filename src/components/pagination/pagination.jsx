import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';

import { getCurrentNumberPage, getGuitarsPagination } from '../../store/pagination/selectors';
import { currentNumberPage } from '../../store/action';

import { MAX_GUITAR_CARDS, MAX_NUMBER_PAGES } from '../../const';
import { Link } from 'react-router-dom';

function Pagination() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitarsPagination);
  const currentPage = useSelector(getCurrentNumberPage);

  const numberPages = guitars.length/MAX_GUITAR_CARDS;

  const getPaginationPages = useMemo(() => {
    const page = Math.floor((currentPage - 1) / MAX_NUMBER_PAGES) * MAX_NUMBER_PAGES;

    return new Array(numberPages).fill(0).map((_, index) => page + index + 1);
  }, [currentPage, numberPages]);

  const handlePageNumberClick = (evt, page) => {
    evt.preventDefault();
    dispatch(currentNumberPage(page));
  };

  const handleBtnNextClick = (evt) => {
    evt.preventDefault();
    dispatch(currentNumberPage(currentPage + MAX_NUMBER_PAGES));
  };

  const handleBtnBackClick = (evt) => {
    evt.preventDefault();
    if (currentPage > MAX_NUMBER_PAGES) {
      dispatch(currentNumberPage(currentPage - MAX_NUMBER_PAGES));
    }
  };

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        <li className="pagination__page pagination__page--prev" id="next">
          {currentPage <=  MAX_NUMBER_PAGES ? '' : <a className="link pagination__page-link" href="/" onClick={handleBtnBackClick}>Назад</a>}
        </li>

        {getPaginationPages.map((page) => (
          <li className={`pagination__page ${currentPage === page ? 'pagination__page--active' : ''}`} key={page}>
            <Link className="link pagination__page-link" to={`/catalog/page_${currentPage}`} onClick={(evt) => handlePageNumberClick(evt, page)}>{page}</Link>
          </li>
        ))}
        <li className="pagination__page pagination__page--next" id="next">
          {currentPage === numberPages ? '' : <a className="link pagination__page-link" href="/" onClick={handleBtnNextClick}>Далее</a>}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
