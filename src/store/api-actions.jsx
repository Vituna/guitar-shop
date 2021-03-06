import { loadGuitars, loadCurrentGuitar, loadGuitarsFilter, loadGuitarsCountPagination, setComments, loadFilterGuitars, setGuitarsError, loadingCurrentGuitar, loadGuitarsPrice, setModalType, setCommentNew, setCommentPostStatus, loadFilterPricce, setDiscountGuitar, setCouponPostStatus, postCouponLoading, loadingGuitarBasket} from './action';
import { ApiRoute, EMBED, TypeModal, CommentPostStatus } from '../const';

const TOTAL_COUNT = 'x-total-count';

export const fetchGuitarsAction = () => (
  async (dispatch, _getState, api) => {
    try {
      dispatch(loadFilterGuitars());
      dispatch(loadingGuitarBasket());
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
      dispatch(loadGuitarsCountPagination(guitarCount));
      dispatch(loadGuitarsFilter(data));
    } catch {
      dispatch(setGuitarsError(true));
    }
  }
);

export const fetchPriceParams = ( path ) => (
  async(dispatch, _getState, api) => {
    const {data} = await api.get( `${ApiRoute.Guitars}/${path}`);
    dispatch(loadFilterPricce(false));
    dispatch(loadGuitarsPrice(data));
  }
);

export const fetchCurrentGuitarAction = (id) => (
  async (dispatch, _getState, api) => {
    try {
      dispatch(loadingCurrentGuitar());
      const {data} = await api.get(`${ApiRoute.Guitars}/${id}`);
      dispatch(loadCurrentGuitar(data));
    }
    catch {
      dispatch(setGuitarsError(true));
    }
  }
);

export const fetchComments = (id) => (
  async(dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${ApiRoute.Guitars}/${id}/comments`);
      dispatch(setComments(data));
      dispatch(setCommentPostStatus(CommentPostStatus.Posted));
    }
    catch {
      dispatch(setCommentPostStatus(CommentPostStatus.NotPosted));
    }
  }
);

export const postComment = (body) => (
  async(dispatch, _getState, api) => {
    dispatch(setCommentPostStatus(CommentPostStatus.Posting));
    try {
      const {data} = await api.post(ApiRoute.Comments, body);
      dispatch(setModalType(TypeModal.OpenSuccessReviews));
      dispatch(setCommentNew([data]));
      dispatch(setCommentPostStatus(CommentPostStatus.Posted));
    }
    catch {
      dispatch(setCommentPostStatus(CommentPostStatus.NotPosted));
    }
  }
);

export const postCoupons = (body) => (
  async(dispatch, _getState, api) => {
    try {
      dispatch(postCouponLoading());
      const {data} = await api.post(ApiRoute.Coupons, body);
      dispatch(setDiscountGuitar(data));
      if (data !== undefined) {
        dispatch(setCouponPostStatus(true));
      }
    } catch {
      dispatch(setDiscountGuitar(0));
      dispatch(setCouponPostStatus(false));
      dispatch(setGuitarsError(true));
    }
  }
);


