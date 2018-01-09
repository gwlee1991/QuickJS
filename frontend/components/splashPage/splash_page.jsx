import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends Component {
  render() {
    return (
      <div className="main-body">
        <h1>Welcome to QuickJS</h1>
        <h2>A quick overview of JavaScript for beginners!</h2>
        <Link to="/signup">
          <div className="signUpButton">Sign Up</div>
        </Link>
      </div>
    );
  }
}

export default SplashPage;
