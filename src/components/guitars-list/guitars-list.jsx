/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getGuitarsFilter, getGuitarsLoadingStatus } from '../../store/guitar/selectors';
import { getSortType, getDirectionType } from '../../store/sort/selectors';
import { getMinPrice, getMaxPrice, getTypeFilter, getStringFilter } from '../../store/filters/selectors';
import { fetchGuitarsParams, fetchGuitarsPagination } from '../../store/api-actions';
import { getCurrentNumberPage } from '../../store/pagination/selectors';

import Sort from '../sort/sort';
import GuitarOffer from '../guitar-offer/guitar-offer';
import Preloader from '../preloader/preloader';

import { getSortParams } from '../../utils';
import { LIMIT_CARDS } from '../../const';

function GuitarsList() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitarsFilter);
  const isLoading = useSelector(getGuitarsLoadingStatus);
  const sortType = useSelector(getSortType);
  const directionType = useSelector(getDirectionType);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const filterType = useSelector(getTypeFilter);
  const filterString = useSelector(getStringFilter);
  const currentPage = useSelector(getCurrentNumberPage);
  const history = useHistory();

  const getPaginationStart = () => {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === 2) {
      return 10;
    }
    if (currentPage === 3) {
      return 20;
    }
  };

  const paginationStart = getPaginationStart();

  useEffect(() => {
    const filterParams = getSortParams(sortType, directionType, minPrice, maxPrice, filterType, filterString, paginationStart, LIMIT_CARDS);
    const nameUrl = `page_${currentPage}`;
    history.push(nameUrl);
    dispatch(fetchGuitarsParams(filterParams));
    const filterParamsPagination = getSortParams(sortType, directionType, minPrice, maxPrice, filterType, filterString);
    dispatch(fetchGuitarsPagination(filterParamsPagination));
  }, [dispatch, sortType, directionType, minPrice, maxPrice, filterType, filterString, paginationStart, history,currentPage]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Sort />
      <div className="cards catalog__cards">

        {guitars.map((guitar) => (
          <GuitarOffer key={guitar.id} guitar={guitar} />
        ))}

      </div>
    </>
  );
}

export default GuitarsList;
