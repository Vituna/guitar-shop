/* eslint-disable no-console */
import { loadGuitars, loadCurrentGuitar, loadGuitarsFilter, loadGuitarsPagination, setComments, loadFilterGuitars, setGuitarsError, loadingCurrentGuitar} from './action';

import { ApiRoute, EMBED } from '../const';

const TOTAL_COUNT = 'x-total-count';

export const fetchGuitarsAction = () => (
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(ApiRoute.Guitars);
      dispatch(loadGuitars(data));
    } catch {
      dispatch(setGuitarsError(true));
    }
  }
);

export const fetchGuitarsParams = ( path ) => (
  async(dispatch, _getState, api) => {
    try {
      dispatch(loadFilterGuitars());
      const result = await api.get(`${ApiRoute.Guitars}${path}`, {
        params: {[EMBED.Embed]: EMBED.Comment},
      });
      const {data} = result;
      const totalCount = result.headers[TOTAL_COUNT];
      const guitarCount = totalCount ? +totalCount : data.length;

      dispatch(loadGuitarsPagination(guitarCount));
      dispatch(loadGuitarsFilter(data));
    } catch {
      dispatch(setGuitarsError(true));
    }
  }
);

export const fetchCurrentGuitarAction = (id) => (
  async (dispatch, _getState, api) => {
    try {
      dispatch(loadingCurrentGuitar());
      const {data} = await api.get(`${ApiRoute.Guitars}/${id}`);
      dispatch(loadCurrentGuitar(data));
    } catch {
      dispatch(setGuitarsError(true));
    }
  }
);


export const fetchComments = (id) =>
  async(dispatch, _getState, api) => {
    const {data} = await api.get(`${ApiRoute.Guitars}/${id}/comments`);
    dispatch(setComments(data));
  };
