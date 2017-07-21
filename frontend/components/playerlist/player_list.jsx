import React from 'react';
import { values } from 'lodash';
import PlayerItem from './player_item';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps.schedule).length === 0) {
      const teams = this.props.schedule;
      const keys = Object.keys(teams);
      const out = [];

      for (let i = 0; i < keys.length; i++) {
        const home = teams[keys[i]].home_id;
        const away = teams[keys[i]].away_id;
        if (!out.includes(home)) {
          out.push(home);
        }

        if (!out.includes(away)) {
          out.push(away);
        }
      }
      this.props.fetchPlayers({
        team_ids: out
      });
      console.log(out);
    }
  }

  render() {
    console.log(this.props.players);
    if (Object.keys(this.props.players).length === 0) {
      return(
        <div></div>
      );
    } else {
      const p1 = this.props.players[Object.keys(this.props.players)[0]];

      const players = values(this.props.players);
      const playerItems = players.map(
        (player, idx) => <PlayerItem key={idx} player={player} />
    );

      console.log(p1);
      return (
        <div>
          {playerItems}
        </div>
      );
    }
  }
}
