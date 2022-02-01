import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { rootReducer } from './store/root-reducer';
import { createApi } from './services/api';
import { fetchGuitarsAction } from './store/api-actions';
import { setErrorNoFound, setGuitarAddBasket } from './store/action';

import App from './components/app/app';

import { getGuitarsStorage } from './utils';

const api = createApi(
  () => store.dispatch(setErrorNoFound(true)),
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(fetchGuitarsAction());
const guitars = getGuitarsStorage();
store.dispatch(setGuitarAddBasket(guitars));

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer/>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
