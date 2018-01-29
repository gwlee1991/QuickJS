import { connect } from 'react-redux';
import SplashPage from './splash_page';
import { signUp, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  signUpErrors: session.errors ? session.errors.signUp : [],
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  signUp: user => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
