import React from 'react';
import { values } from 'lodash';
import Portrait from './portrait';

export default class UpcomingContest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const entry = this.props.entry;
    const contest = entry.contest;

    const players = values(entry).slice(1);
    console.log(players);
    const portraits = players.map(
      (player, idx) => <Portrait key={idx} player={player} />
    );

    return(
      <li className='upcoming-contest'>
        {portraits}
      </li>
    );
  }
}
