import React from 'react';
import { values } from 'lodash';
import ContestItem from './contest_item';

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
      (contest, idx) => <ContestItem key={idx} contest={contest} />
    );

    return(
      <div className='lobby-list'>
        <table className='list-table'>
          <thead>
            <tr>
              <th>Contest Name</th>
              <th>Point Value</th>
              <th>Max Contestants</th>
              <th>Prize Pot</th>
              <th>Contest Date</th>
              <th></th>
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
