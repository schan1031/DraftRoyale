import { connect } from 'react-redux';
import { fetchEntries } from '../../actions/dashboard_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  allEntries: state.dashboard.allEntries
});

const mapDispatchToProps = dispatch => ({
  fetchEntries: (entries) => dispatch(fetchEntries(entries))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
