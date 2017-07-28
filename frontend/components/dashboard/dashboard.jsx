import React from 'react';
import { values } from 'lodash';
import UpcomingContest from './upcoming_contest.jsx';
import PastContest from './past_contest.jsx';
import { Redirect} from 'react-router-dom';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEntries();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.allEntries) {
      if (Object.keys(this.props.allEntries).length < Object.keys(nextProps.allEntries).length) {
        this.props.fetchEntries();
      }
    } else {
      this.props.fetchEntries();
    }
  }

  noUpcoming() {
    return (
      <li className='placeholder'>No Upcoming Contests</li>
    );
  }

  noPast() {
    return(
      <li className= 'placeholder'>No Past Contests</li>
    );
  }

  render() {

    if (this.props.allEntries) {
      const entries = values(this.props.allEntries);
      const upcoming = [];
      const past = [];
      const today = new Date();

      entries.forEach((entry) => {
        const entryDate = new Date(entry.contest.contest_date);
        if (entryDate > today) {
          upcoming.push(entry);
        } else {
          past.push(entry);
        }
      });

      let upcomingItems = upcoming.map(
        (entry, idx) => <UpcomingContest key={idx} entry={entry}/>
      );

      let pastItems = past.map(
        (entry, idx) => <PastContest key={idx} entry={entry}/>
      );

      if (!this.props.loggedIn) {
        return <Redirect to='/' />;
      }

      if (upcomingItems.length === 0) {
        upcomingItems = this.noUpcoming();
      }

      if (pastItems.length === 0) {
        pastItems = this.noPast();
      }

      return (
        <div className='dashboard animated fadeIn'>

          <div className='upcoming'>
            <ul>
              <li className='dashboard-title'>
                Upcoming
              </li>
              <div className='up-items'>
                {upcomingItems}
              </div>
            </ul>
          </div>

          <div className='past'>
            <ul>
              <li className='dashboard-title'>
                Past
              </li>
              <div className='past-items'>
                {pastItems}
              </div>
            </ul>
          </div>

        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}
