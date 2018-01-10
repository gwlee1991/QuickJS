import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.signUpButton = this.signUpButton.bind(this);
  }

  signUpButton() {
    if (!this.props.currentUser) {
      return (
        <Link to="/signup" id="signUpButton">
          <div className="signUpButton">Sign Up</div>
        </Link>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="main-body">
        <h1>Welcome to QuickJS</h1>
        <h2>A quick overview of JavaScript for beginners!</h2>
        {this.signUpButton()}
      </div>
    );
  }
}

export default SplashPage;
