import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 10,
  },
  content: {
    position: 'fixed',
    height: '28em',
    width: '21em',
    top: '50%',
    left: '50%',
    border: '0.1em solid black',
    transform: 'translate(-50%, -50%)',
    padding: '1em',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    borderRadius: '0.1em',
    zIndex: 11,
    opacity: 100,
    transition: 'opacity 0.5s',
  },
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.props.clearSessionErrors();
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.props.clearSessionErrors();
    this.setState({ modalIsOpen: false });
    this.props.history.push('/');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      this.props.history.push('/');
    }
  }
  componentWillUnmount() {
    this.props.clearSessionErrors();
  }
  renderErrors() {
    if (this.props.errors) {
      return <ul>{this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}</ul>;
    }
  }
  updateFields(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signUp({ user });
  }
  render() {
    if (this.state.modalIsOpen === undefined) {
      this.openModal();
    }
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
                <input
                  onChange={this.updateFields('email')}
                  type="text"
                  values={this.state.email}
                />
              </label>
              <label>
                Password:
                <input
                  onChange={this.updateFields('password')}
                  type="password"
                  values={this.state.password}
                />
              </label>
              <div>{this.renderErrors()}</div>
              <input className="signUpButton" type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SignUp;
