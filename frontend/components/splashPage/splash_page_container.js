import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mapStateToProps = ({ session }) => {
  const errors = session.errors ? session.errors.signUp : [];
  return {
    currentUser: session.currentUser,
    signInErrors: errors,
  };
};

export default connect(mapStateToProps)(SplashPage);
