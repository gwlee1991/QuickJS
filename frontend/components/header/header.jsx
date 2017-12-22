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
    this.props.processForm({ user });
  }

  sessionField() {
    if (this.props.currentUser) {
      return <div>SignOut</div>;
    }
    return <div>SignIn</div>;
  }

  render() {
    console.log(this.props.currentUser);
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
