import { Route, Switch } from 'react-router-dom';

import Main from '../main/main';
import GuitarCard from '../guitar-card/guitar-card';
import NoFound from '../no-found/no-found';
import ReviewModal from '../review-modal/review-modal';
import ReviewModalSuccess from '../review-modal-success/review-modal-success';

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
      <ReviewModal />
      <ReviewModalSuccess />
    </>
  );
}

export default App;
