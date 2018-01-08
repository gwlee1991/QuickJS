import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sessionField = this.sessionField.bind(this);
    this.logInForm = this.logInForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.logIn({ user });
  }

  logInForm() {
    return (
      <div className="signin">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email address"
            />
          </label>
          <label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </label>

          <input className="signInButton" type="submit" value="Sign In" />
        </form>
        <a href="/auth/facebook">
          <i className="fa fa-facebook-square fa-3x" aria-hidden="true" />
        </a>
      </div>
    );
  }

  sessionField() {
    if (this.props.currentUser) {
      return (
        <div>
          <button onClick={this.props.logOut}>logOut</button>
        </div>
      );
    }
    return this.logInForm();
  }

  renderErrors() {
    return (
      <ul style={{ margin: 0, fontFamily: 'Zilla Slab', color: 'red' }}>
        {this.props.errors.map((error, i) => (
          <li style={{ listStyleType: 'none', fontSize: '0.7em' }} key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar">
        <h3>{'QuickJS</>'}</h3>
        <div className="sessionform">
          {this.sessionField()}
          <div className="errors">{this.props.errors ? this.renderErrors() : ''}</div>
        </div>
      </nav>
    );
  }
}

export default Header;

// remind to create new branch before start working.
// the whole gitflow thing.
