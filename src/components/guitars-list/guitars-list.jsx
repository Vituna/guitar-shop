import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';

import { getGuitarsFilter, getLoadingUrlStatus, getLoadingGuitarsFilter } from '../../store/guitar/selectors';
import { getSortType, getDirectionType } from '../../store/sort/selectors';
import { getMinPrice, getMaxPrice, getTypeFilter, getStringFilter } from '../../store/filters/selectors';
import { fetchGuitarsParams, fetchPriceParams } from '../../store/api-actions';
import { getCurrentNumberPage } from '../../store/pagination/selectors';
import { noLoadingUrl } from '../../store/action';

import Sort from '../sort/sort';
import GuitarOffer from '../guitar-offer/guitar-offer';
import Preloader from '../preloader/preloader';

import { getAllParams, urlChangeParams, getParamsReduce, changePageUrl } from '../../utils';
import { LIMIT_CARDS } from '../../const';

function GuitarsList() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitarsFilter);
  const isLoadingFilter = useSelector(getLoadingGuitarsFilter);
  const sortType = useSelector(getSortType);
  const directionType = useSelector(getDirectionType);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const filterType = useSelector(getTypeFilter);
  const filterString = useSelector(getStringFilter);
  const currentPage = useSelector(getCurrentNumberPage);
  const urlStatus = useSelector(getLoadingUrlStatus);

  const history = useHistory();
  const location = useLocation();

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
    if (urlStatus) {
      const locationSearch = location.search;
      const searchParam = locationSearch.split('?')[1] || '';
      const urlParams = qs.parse(searchParam);
      urlChangeParams(urlParams, dispatch);
      dispatch(noLoadingUrl());
      const locationSearchs = location.pathname;
      const searchParams = locationSearchs.split('catalog/page_')[1] || '';
      const name = qs.parse(searchParams);
      changePageUrl(name, dispatch);
    }
  }, [dispatch, location, urlStatus]);

  useEffect(() => {
    if (!urlStatus) {
      const filterParams = getAllParams(sortType, directionType, minPrice, maxPrice, filterType, filterString, paginationStart, LIMIT_CARDS);
      const filterPriceParams = getAllParams(sortType, directionType, minPrice, maxPrice, filterType, filterString);
      const paramsAll = getParamsReduce([filterParams]);
      const paramsPrice = getParamsReduce([filterPriceParams]);
      const pathAllParamsPrice = `?${qs.stringify(paramsAll)}`;
      const pathParamsPrice = `?${qs.stringify(paramsPrice)}`;
      const nameUrl = `page_${currentPage}`;
      history.push(nameUrl);
      history.push(pathAllParamsPrice);
      dispatch(fetchGuitarsParams(pathAllParamsPrice));
      dispatch(fetchPriceParams(pathParamsPrice));
    }
  }, [dispatch, sortType, directionType, minPrice, maxPrice, filterType, filterString, paginationStart, history,currentPage, urlStatus]);

  if (isLoadingFilter) {
    return <Preloader />;
  }

  return (
    <>
      <Sort />
      <div className="cards catalog__cards">

        {guitars && guitars.map((guitar) => (
          <GuitarOffer key={guitar.id} guitar={guitar} />
        ))}

      </div>
    </>
  );
}

export default GuitarsList;
