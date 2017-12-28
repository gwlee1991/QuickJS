import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SplashPage from './splashPage/splash_page';
import SignupContainer from './signup/signup_container';

import { ProtectedRoute, AuthRoute } from '../util/routes_util';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderContainer />
        </header>
        <Switch>
          <AuthRoute path="/signup" component={SignupContainer} />
          <Route path="/" component={SplashPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
