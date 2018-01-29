import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SplashPageContainer from './splashPage/splash_page_container';
import SignupContainer from './signup/signup_container';
import MainpageContainer from './mainpage/mainpage_container';

import { ProtectedRoute, AuthRoute } from '../util/routes_util';

class App extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <header>
            <HeaderContainer />
          </header>
          <div>
            <Switch>
              <Route path="/" component={MainpageContainer} />
            </Switch>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <HeaderContainer />
          </header>
          <div>
            <Switch>
              <AuthRoute exact path="/signup" component={SignupContainer} />
              <Route path="/" component={SplashPageContainer} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({ loggedIn: Boolean(state.session.currentUser) });

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
