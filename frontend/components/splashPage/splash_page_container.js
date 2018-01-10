import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
});

export default connect(mapStateToProps)(SplashPage);
