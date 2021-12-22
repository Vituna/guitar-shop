/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getGuitarsFilter, getGuitarsLoadingStatus } from '../../store/guitar/selectors';
import { getSortType, getDirectionType } from '../../store/sort/selectors';
import { getMinPrice, getMaxPrice, getTypeFilter, getStringFilter } from '../../store/filters/selectors';
import { fetchGuitarsParams, fetchGuitarsPagination } from '../../store/api-actions';
import { getCurrentNumberPage } from '../../store/pagination/selectors';

import Sort from '../sort/sort';
import GuitarOffer from '../guitar-offer/guitar-offer';
import Preloader from '../preloader/preloader';

import { getSortParams } from '../../utils';
// import { PAGINATION_PARAMS_NAME } from '../../const';
// import { pagination } from '../../store/pagination/pagination';

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
  console.log(currentPage);


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
  // const getPaginationEnd = () => {
  //   if (currentPage === 1) {
  //     return 9;
  //   }
  //   if (currentPage === 2) {
  //     return 16;
  //   }
  //   if (currentPage === 3) {
  //     return 27;
  //   }
  // };
  const limitCards = 9;
  const paginationStart = getPaginationStart();
  // const paginationEnd = getPaginationEnd();

  useEffect(() => {
    const filterParams = getSortParams(sortType, directionType, minPrice, maxPrice, filterType, filterString, paginationStart, limitCards);

    dispatch(fetchGuitarsParams(filterParams));
    const filterParamsPagination = getSortParams(sortType, directionType, minPrice, maxPrice, filterType, filterString);


    dispatch(fetchGuitarsPagination(filterParamsPagination));
  }, [dispatch, sortType, directionType, minPrice, maxPrice, filterType, filterString, paginationStart]);

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
