import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUpContainer from '../signup/signup_container';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
    };
    this.signUpButton = this.signUpButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  signUpButton() {
    if (!this.props.currentUser) {
      return (
        <button onClick={this.handleClick} id="signUpButton">
          <div className="signUpButton">Sign Up</div>
        </button>
      );
    }
    return null;
  }

  handleClick() {
    this.setState({ signUp: !this.state.signUp });
  }

  renderModal() {
    if (this.state.signUp) {
      return <SignUpContainer />;
    }
  }

  render() {
    return (
      <div className="main-body">
        <h1>Welcome to QuickJS</h1>
        <h2>A quick overview of JavaScript for beginners!</h2>
        {this.signUpButton()}
        {this.renderModal()}
      </div>
    );
  }
}

export default SplashPage;
