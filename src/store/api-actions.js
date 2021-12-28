/* eslint-disable no-console */

import { loadGuitars, loadCurrentGuitar, loadGuitarRequest, loadGuitarsFilter, loadGuitarsPagination, setComments} from './action';

import { ApiRoute, EMBED } from '../const';

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
      params: {...params, [EMBED.Embed]: EMBED.Comment},
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

export const fetchComments = (id) =>
  async(dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${ApiRoute.Guitars}/${id}/comments`);
      dispatch(setComments(data));
    } catch {
      // toast.error();
    }
  };


