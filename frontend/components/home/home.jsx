import React, { Component } from 'react';
import SplashPageContainer from '../splashPage/splash_page_container';
import SignupContainer from '../signup/signup_container';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SplashPage: true,
    };
  }
  render() {
    if (this.state.SplashPage) {
      return <SplashPageContainer />;
    }else {
      return <SignupContainer />;
    }
    }
  }
}
