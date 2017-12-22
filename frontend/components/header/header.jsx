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
      <div>
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

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div>
          <span>
            <a href="/auth/facebook">facebook</a>
          </span>
        </div>
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
    return <div>{this.logInForm()}</div>;
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div>logo</div>
        {this.sessionField()}
      </nav>
    );
  }
}

export default Header;

// remind to create new branch before start working.
// the whole gitflow thing.
