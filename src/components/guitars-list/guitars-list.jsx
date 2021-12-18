/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


import { getGuitars } from '../../store/guitar/selectors';
import { getSortType, getDirectionType } from '../../store/sort/selectors';
import { fetchGuitarsParams } from '../../store/api-actions';

import Sort from '../sort/sort';
import GuitarOffer from '../guitar-offer/guitar-offer';

import { getSortParams } from '../../utils';

function GuitarsList() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitars);
  const sortType = useSelector(getSortType);
  const directionType = useSelector(getDirectionType);

  useEffect(() => {
    const sortParams = getSortParams(sortType, directionType);
    dispatch(fetchGuitarsParams(sortParams));
  }, [dispatch, sortType, directionType]);

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
