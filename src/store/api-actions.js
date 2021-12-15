import { loadGuitars } from './action';

import { ApiRoute } from '../const';

export const fetchGuitarsAction = () => (
  async (dispatch, _getState, api) => {
      const {data} = await api.get(ApiRoute.Guitars)
      dispatch(loadGuitars(data))
  }
);
