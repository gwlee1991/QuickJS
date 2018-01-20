import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './header';
import { logIn, logOut } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  const errors = session.errors ? session.errors.signIn : [];
  return {
    currentUser: session.currentUser,
    signInErrors: errors,
  };
};

const mapDispatchToProps = dispatch => ({
  //final resort logIn: (user, history) => dispatch(logIn(user, history)),
  logIn: user => dispatch(logIn(user)),
  logOut: () => dispatch(logOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
