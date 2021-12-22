/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';

// import { getGuitarsFilter } from '../../store/guitar/selectors';

import { getCurrentNumberPage, getGuitarsPagination } from '../../store/pagination/selectors';
import { currentNumberPage } from '../../store/action';

export const getNumberPages = (numberPage, currentPage) => {
  const numberPages = [
    numberPage > 3 && currentPage === numberPage ? currentPage - 3 : null,
    numberPage > 3 && currentPage === 1  ? currentPage + 3:  null,
    currentPage - 2 > 0 ? currentPage - 2 : null,
    currentPage - 1 > 0 ? currentPage - 1 : null,
    currentPage < numberPage ? currentPage + 1: null,
    currentPage < numberPage - 1  ? currentPage + 2:  null,
    currentPage,
  ];
  const quantity = numberPages.filter((page) => page !== null);

  return quantity;
};


function Pagination() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitarsPagination);
  const currentPage = useSelector(getCurrentNumberPage);

  const numberPages = guitars.length/9;

  const handlePageNumberClick = (evt, page) => {
    evt.preventDefault();
    dispatch(currentNumberPage(page));
  };
  // const pageCount = getPageCount(guitars, 9);

  const displayPages = getNumberPages(numberPages, currentPage);
  console.log(guitars);

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        <li className="pagination__page pagination__page--prev" id="next">
          {currentPage <= 3 ? '' : <a className="link pagination__page-link" href="/">Назад</a>}
        </li>

        {displayPages.map((page) => (
          <li className={`pagination__page ${currentPage === page ? 'pagination__page--active' : ''}`} key={page}>
            <a className="link pagination__page-link" href='/' onClick={() => handlePageNumberClick(page)}>{page}</a>
          </li>
        ))}
        {/* <li className="pagination__page">
          <a className="link pagination__page-link pagination__page--active" href="/" onClick={() => handlePageNumberClick(2)}>2</a>
        </li>
        <li className="pagination__page">
          <a className="link pagination__page-link" href="/">3</a>
        </li> */}
        <li className="pagination__page pagination__page--next" id="next">
          {currentPage === numberPages ? '' : <a className="link pagination__page-link" href="/">Далее</a>}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
