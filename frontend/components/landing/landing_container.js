import { connect } from 'react-redux';
import Landing from './landing';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Landing);
