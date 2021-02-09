import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Styles
import './styles/index.scss';
// Pages
import { EnterScreen } from './pages/EnterScreen';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Main } from './pages/Main';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={EnterScreen} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/main" component={Main} />
        </>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
