import { connect } from 'react-redux';
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
  logIn: user => dispatch(logIn(user)),
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
