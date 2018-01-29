import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      email: '',
      password: '',
    };
    this.renderModal = this.renderModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.props.clearSessionErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  openModal() {
    this.setState({ modalIsOpen: true }, () => {
      this.props.clearSessionErrors();
    });
  }

  closeModal() {
    this.props.clearSessionErrors();
    this.setState({ modalIsOpen: false });
    // this.props.history.push('/');
  }

  updateFields(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signUp({ user });
  }

  renderErrors() {
    if (this.props.signUpErrors) {
      return (
        <ul style={{ margin: 0, fontFamily: 'Zilla Slab', color: 'red' }}>
          {this.props.signUpErrors.map((error, i) => (
            <li style={{ listStyleType: 'none', fontSize: '0.7em' }} key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  renderModal() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Signup Modal"
        ariaHideApp={false}
        className="ReactModalPortal"
      >
        <div>
          <div className="close">
            <i onClick={this.closeModal} className="fa fa-window-close" aria-hidden="true" />
          </div>
          <div className="signup-main">
            <h1>Welcome!</h1>
            <h2>Sign Up Here</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <input type="email" onChange={this.updateFields('email')} values={this.state.email} />
              </label>
              <label>
                Password:
                <input onChange={this.updateFields('password')} type="password" values={this.state.password} />
              </label>
              <div className="errors">{this.props.signUpErrors ? this.renderErrors() : ''}</div>
              <input className="signUpButton" type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </Modal>
    );
  }

  render() {
    return (
      <div className="main-body">
        <h1>Welcome to QuickJS</h1>
        <h2>A quick overview of JavaScript for beginners!</h2>

        <div className="signUpButton" onClick={this.openModal}>
          Sign Up
        </div>

        {this.renderModal()}
      </div>
    );
  }
}

export default SplashPage;
