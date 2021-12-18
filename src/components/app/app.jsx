/* eslint-disable no-console */
import { Route, Switch } from 'react-router-dom';

import Main from '../main/main';
import GuitarCard from '../guitar-card/guitar-card';

import { AppRoute } from '../../const';

function App() {

  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <Main />
      </Route>
      <Route exact path={'/guitars/:id'}>
        <GuitarCard />
      </Route>
    </Switch>
  );
}

export default App;
