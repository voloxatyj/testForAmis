import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Context
import { ContextProvider } from './context/context';
import { initialState, reducer } from './context/reducer';
// Styles
import './styles/index.scss';
// Pages
import { EnterScreen } from './pages/EnterScreen';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Main } from './pages/Main';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <Route exact path="/" component={EnterScreen} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
