import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Main from '../main/main';

import { AppRoute } from '../../const';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
