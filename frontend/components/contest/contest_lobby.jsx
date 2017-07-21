import React from 'react';
import { values } from 'lodash';
import ContestItem from './contest_item';
import { Redirect } from 'react-router-dom';

export default class ContestLobby extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllContests();
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to='/' />;
    }

    const contests = values(this.props.contests);
    const contestItems = contests.map(
      (contest, idx) => <ContestItem key={idx} contest={contest} fetchSchedule={this.props.fetchSchedule} />
    );

    return(
      <div className='lobby-list'>
        <table className='list-table table--fixed'>
          <thead>
            <tr>
              <th className='cn'>Contest Name</th>
              <th className='pv'>Point Value</th>
              <th className='mc'>Max Contestants</th>
              <th className='pp'>Prize Pot</th>
              <th className='cd'>Contest Date</th>
              <th className='empty'></th>
            </tr>
          </thead>
          <tbody>
            {contestItems}
          </tbody>
        </table>
      </div>
    );
  }

}
