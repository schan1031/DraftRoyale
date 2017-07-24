import { connect } from 'react-redux';
import { fetchEntries } from '../../actions/dashboard_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  allEntries: state.dashboard.allEntries,
  pastEntries: state.dashboard.pastEntries,
  upcomingEntries: state.dashboard.upcomingEntries
});

const mapDispatchToProps = dispatch => ({
  fetchEntries: (entries) => dispatch(fetchEntries(entries))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
