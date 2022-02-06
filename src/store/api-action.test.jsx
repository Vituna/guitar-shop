import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from '../services/api';
import { fetchGuitarsAction, fetchCurrentGuitarAction, fetchGuitarsParams, fetchComments, postComment, postCoupons } from './api-actions';
import thunk from 'redux-thunk';

import { mockGuitars, mockGuitar, mockComments, mockComment } from '../utils/test-mocks';
import { loadGuitars, loadingCurrentGuitar, loadCurrentGuitar, loadGuitarsFilter, loadGuitarsCountPagination, setComments, loadFilterGuitars, setCommentNew, setCommentPostStatus, setModalType, setDiscountGuitar, setCouponPostStatus } from './action';

import { ApiRoute, EMBED, CommentPostStatus, TypeModal } from '../const';

const ID_TEST = 1;

const HttpCode = {
  Ok: 200,
  NoContent: 204,
};

describe('Async actions', () => {

  const api = createApi();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch fetchGuitarsAction when GET /guitars', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.Guitars)
      .reply(HttpCode.Ok, mockGuitars);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsAction());

    expect(store.getActions()).toEqual([
      loadFilterGuitars(),
      loadGuitars(mockGuitars),
    ]);
  });

  it('should dispatch fetchCurrentGuitarAction when GET /guitars/id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${ApiRoute.Guitars}/${ID_TEST}`)
      .reply(HttpCode.Ok, mockGuitar);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchCurrentGuitarAction(ID_TEST));

    expect(store.getActions())
      .toEqual([
        loadingCurrentGuitar(),
        loadCurrentGuitar(mockGuitar),
      ]);
  });

  it('should dispatch fetchGuitarsParams when GET /guitars/?_start=10&_end=20&_embed=comments', async () => {
    const store = mockStore();
    const fakeParams = '_start=10&_end=20';

    mockAPI
      .onGet(`${ApiRoute.Guitars}${fakeParams}`)
      .reply(HttpCode.Ok, mockGuitars, {params: {[EMBED.Embed]: EMBED.Comment}});

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsParams(fakeParams));

    expect(store.getActions())
      .toEqual([
        loadFilterGuitars(),
        loadGuitarsCountPagination(10),
        loadGuitarsFilter(mockGuitars),
      ]);
  });

  it('should dispatch fetchGuitarsParams when GET /guitars/?_sort=price&_order=desc', async () => {
    const store = mockStore();
    const fakeParams = '_sort=price&_order=desc';

    mockAPI
      .onGet(`${ApiRoute.Guitars}${fakeParams}`)
      .reply(HttpCode.Ok, mockGuitars, {params: {[EMBED.Embed]: EMBED.Comment}});

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsParams(fakeParams));

    expect(store.getActions())
      .toEqual([
        loadFilterGuitars(),
        loadGuitarsCountPagination(10),
        loadGuitarsFilter(mockGuitars),
      ]);
  });

  it('should dispatch postComment when GET comments /guitars/comments/1', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${ApiRoute.Guitars}/${ID_TEST}/comments`)
      .reply(HttpCode.Ok, mockComments);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchComments(ID_TEST));

    expect(store.getActions())
      .toEqual([
        setComments(mockComments),
      ]);
  });

  it('should dispatch postComment when POST comment', async () => {
    const store = mockStore();
    mockAPI
      .onPost(`${ApiRoute.Comments}`)
      .reply(201, mockComment);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(postComment({body: mockComment}));

    expect(store.getActions())
      .toEqual([
        setCommentPostStatus(CommentPostStatus.Posting),
        setModalType(TypeModal.OpenSuccessReviews),
        setCommentPostStatus(CommentPostStatus.Posted),
        setCommentNew([mockComment]),
      ]);
  });

  it('should dispatch postComment when POST cupon', async () => {
    const store = mockStore();
    mockAPI
      .onPost(`${ApiRoute.Coupons}`)
      .reply(201, 5);

    expect(store.getActions()).toEqual([]);
    const body = {coupon: 'light-333'};
    await store.dispatch(postCoupons(body));

    expect(store.getActions())
      .toEqual([
        setDiscountGuitar(5),
        setCouponPostStatus(true),
      ]);
  });

});
