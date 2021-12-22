/* eslint-disable no-console */

import { loadGuitars, loadCurrentGuitar, loadGuitarRequest, loadGuitarsFilter, loadGuitarsPagination } from './action';

import { ApiRoute } from '../const';

export const fetchGuitarsAction = () => (
  async (dispatch, _getState, api) => {
    const {data} = await api.get(ApiRoute.Guitars);
    dispatch(loadGuitars(data));
  }
);

export const fetchCurrentGuitarAction = (id) => (
  async (dispatch, _getState, api) => {
    dispatch(loadGuitarRequest());
    try {
      const {data} = await api.get(`${ApiRoute.Guitars}/${id}`);
      dispatch(loadCurrentGuitar(data));
    } catch {
      // cogoToast.error()
    }
  }
);

export const fetchGuitarsParams = ( params ) => (
  async(dispatch, _getState, api) => {
    // console.log(params);
    const {data} = await api.get(ApiRoute.Guitars, {
      params: {...params},
    });
    dispatch(loadGuitarsFilter(data));
  }
);

export const fetchGuitarsPagination = ( params ) => (
  async(dispatch, _getState, api) => {
    console.log(params);
    const {data} = await api.get(ApiRoute.Guitars, {
      params: {...params},
    });
    dispatch(loadGuitarsPagination(data));
  }
);

