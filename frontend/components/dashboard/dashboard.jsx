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

  componentWillReceiveProps(nextProps) {
    console.log('PREVPROPS', this.props.allEntries);
    console.log('NEXTPROPS', nextProps.allEntries);
    if (this.props.allEntries) {
      if (Object.keys(this.props.allEntries).length < 1) {
        console.log('REFETCH');
        this.props.fetchEntries();
      }
    }
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
  }
}
