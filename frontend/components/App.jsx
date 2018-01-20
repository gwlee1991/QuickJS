import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SplashPageContainer from './splashPage/splash_page_container';
import SignupContainer from './signup/signup_container';
import MainpageContainer from './mainpage/mainpage_container';

import { ProtectedRoute, AuthRoute } from '../util/routes_util';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderContainer />
        </header>
        <Switch>
          <ProtectedRoute path="/main" component={MainpageContainer} />
          <AuthRoute path="/signup" component={SignupContainer} />
          <Route path="/" component={SplashPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
