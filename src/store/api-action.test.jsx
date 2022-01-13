import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from '../services/api';
import { fetchGuitarsAction, fetchCurrentGuitarAction, fetchGuitarsParams, fetchGuitarsPagination, fetchComments } from './api-actions';
import thunk from 'redux-thunk';

import { mockGuitars, mockGuitar, mockComments } from '../utils/test-mocks';
import { loadGuitars, loadGuitarRequest, loadCurrentGuitar, loadGuitarsFilter, loadGuitarsPagination, setComments } from './action';

import { ApiRoute } from '../const';


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
        loadGuitarRequest(),
        loadCurrentGuitar(mockGuitar),
      ]);
  });

  it('should dispatch fetchGuitarsParams when GET /guitars/?_start=10&_end=20&_embed=comments', async () => {
    const store = mockStore();
    const fakeParams = '_start=10&_end=20&_embed=comments';

    mockAPI
      .onGet(`${ApiRoute.Guitars}`)
      .reply(HttpCode.Ok, mockGuitars);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsParams(fakeParams));

    expect(store.getActions())
      .toEqual([
        loadGuitarsFilter(mockGuitars),
      ]);
  });

  it('should dispatch fetchGuitarsParams when GET /guitars/?_sort=price&_order=desc', async () => {
    const store = mockStore();
    const fakeParams = '_sort=price&_order=desc';

    mockAPI
      .onGet(`${ApiRoute.Guitars}`)
      .reply(HttpCode.Ok, mockGuitars);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsParams(fakeParams));

    expect(store.getActions())
      .toEqual([
        loadGuitarsFilter(mockGuitars),
      ]);
  });

  it('should dispatch fetchGuitarsPagination when GET /guitars/?_start=100&_end=19', async () => {
    const store = mockStore();
    const fakeParams = '_start=100&_end=19';

    mockAPI
      .onGet(`${ApiRoute.Guitars}`)
      .reply(HttpCode.Ok, mockGuitars);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsPagination(fakeParams));

    expect(store.getActions())
      .toEqual([
        loadGuitarsPagination(mockGuitars),
      ]);
  });

  it('should dispatch fetchGuitarsPagination when GET comments', async () => {
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
});
