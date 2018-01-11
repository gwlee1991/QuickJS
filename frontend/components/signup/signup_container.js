import { connect } from 'react-redux';
import SignUp from './signup';
import { signUp, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  signUpErrors: session.errors.signUp,
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  signUp: user => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
