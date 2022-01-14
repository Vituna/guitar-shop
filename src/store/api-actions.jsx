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
    const {data} = await api.get(`${ApiRoute.Guitars}/${id}`);
    dispatch(loadCurrentGuitar(data));
  }
);

export const fetchGuitarsParams = ( path ) => (
  async(dispatch, _getState, api) => {
    const {data} = await api.get(`${ApiRoute.Guitars}${path}`, {
      params: {[EMBED.Embed]: EMBED.Comment},
    });
    dispatch(loadGuitarsFilter(data));
  }
);

export const fetchGuitarsPagination = ( path ) => (
  async(dispatch, _getState, api) => {
    const {data} = await api.get( `${ApiRoute.Guitars}/${path}`);
    dispatch(loadGuitarsPagination(data));
  }
);

export const fetchComments = (id) =>
  async(dispatch, _getState, api) => {
    const {data} = await api.get(`${ApiRoute.Guitars}/${id}/comments`);
    dispatch(setComments(data));
  };
