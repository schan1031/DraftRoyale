import React from 'react';
import { values } from 'lodash';
import UpcomingContest from './upcoming_contest.jsx';
import PastContest from './past_contest.jsx';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {

    const entries = values(this.props.allEntries);
    const upcoming = [];
    const past = [];

    entries.forEach((entry) => {
      if (entry.contest.status === false) {
        upcoming.push(entry);
      } else {
        past.push(entry);
      }
    });

    const upcomingItems = upcoming.map(
      (entry, idx) => <UpcomingContest key={idx} entry={entry}/>
    );

    const pastItems = past.map(
      (entry, idx) => <PastContest key={idx} entry={entry}/>
    );

    return (
      <div className='dashboard'>
        <div className='upcoming'>
          <div className='dashboard-title'>
            Upcoming
          </div>
          <ul>
            {upcomingItems}
          </ul>
        </div>
        <div className='past'>
          <div className='dashboard-title'>
            Past
          </div>
          <ul>
            {pastItems}
          </ul>
        </div>
      </div>
    );
  }
}
