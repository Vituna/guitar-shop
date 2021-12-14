import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Main from '../main/main';

function App() {

  return (
    <Router>

    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
