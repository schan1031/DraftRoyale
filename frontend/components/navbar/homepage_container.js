import { connect } from 'react-redux';
import Homepage from './homepage';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Homepage);
