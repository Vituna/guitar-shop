import { Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Main from '../main/main';
import GuitarCard from '../guitar-card/guitar-card';
import Basket from '../basket/basket';
import NoFound from '../no-found/no-found';
import ModalReviewForm from '../modal-review-form/modal-review-form';
import ModalReviewSuccess from '../modal-review-success/modal-review-success';
import ModalCardAdd from '../modal-cart-add/modal-cart-add';
import ModalAddSuccess from '../modal-add-success/modal-add-success';
import ModalCartDelete from '../modal-cart-delete/modal-cart-delete';

import { AppRoute } from '../../const';

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`${AppRoute.CatalogPage}`}>
          <Main />
        </Route>
        <Route exact path={`${AppRoute.Guitars}/:id`}>
          <GuitarCard />
        </Route>
        <Route exact path={`${AppRoute.Basket}`}>
          <Basket />
        </Route>
        <Route>
          <NoFound />
        </Route>
      </Switch>
      <ModalReviewForm />
      <ModalReviewSuccess />
      <ModalCardAdd />
      <ModalAddSuccess />
      <ModalCartDelete />
    </>
  );
}

export default App;
