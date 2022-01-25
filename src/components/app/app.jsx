import { Route, Switch } from 'react-router-dom';

import Main from '../main/main';
import GuitarCard from '../guitar-card/guitar-card';
import NoFound from '../no-found/no-found';
import ModalReviewForm from '../modal-review-form/modal-review-form';
import ModalReviewSuccess from '../modal-review-success/modal-review-success';
import ModalCardAdd from '../modal-cart-add/modal-cart-add';

import { AppRoute } from '../../const';

function App() {

  return (
    <>
      <Switch>
        <Route exact path={`${AppRoute.CatalogPage}`}>
          <Main />
        </Route>
        <Route exact path={`${AppRoute.Guitars}/:id`}>
          <GuitarCard />
        </Route>
        <Route>
          <NoFound />
        </Route>
      </Switch>
      <ModalReviewForm />
      <ModalReviewSuccess />
      <ModalCardAdd />
    </>
  );
}

export default App;
