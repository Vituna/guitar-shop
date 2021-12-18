/* eslint-disable no-console */
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Main from '../main/main';
import GuitarCard from '../guitar-card/guitar-card';

import { AppRoute } from '../../const';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route exact path={'/guitars/:id'}>
          <GuitarCard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
