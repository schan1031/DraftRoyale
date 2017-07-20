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
      contest => <ContestItem key={contest.id} contest={contest} />
    );

    return(
      <div className='lobby-list'>
        <ul>
          <li>
            <span>Contest Name</span>
            <span>Point Value</span>
            <span>Max Contestants</span>
            <span>Prize Pot</span>
          </li>
          {contestItems}
        </ul>
      </div>
    );
  }

}
