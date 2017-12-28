import { connect } from 'react-redux';
import SignUp from './signup';
import { signup, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  errors : session.errors
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
