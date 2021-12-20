/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getGuitarsFilter, getGuitarsLoadingStatus } from '../../store/guitar/selectors';
import { getSortType, getDirectionType } from '../../store/sort/selectors';
import { getMinPrice, getMaxPrice, getTypeFilter, getStringFilter } from '../../store/filters/selectors';
import { fetchGuitarsParams } from '../../store/api-actions';

import Sort from '../sort/sort';
import GuitarOffer from '../guitar-offer/guitar-offer';
import Preloader from '../preloader/preloader';

import { getSortParams } from '../../utils';

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

  // console.log(filterType);


  useEffect(() => {
    const filterParams = getSortParams(sortType, directionType, minPrice, maxPrice, filterType, filterString);
    dispatch(fetchGuitarsParams(filterParams));
  }, [dispatch, sortType, directionType, minPrice, maxPrice, filterType, filterString]);

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
