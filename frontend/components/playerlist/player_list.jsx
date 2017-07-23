import React from 'react';
import { values } from 'lodash';
import PlayerItem from './player_item';
import MyTeam from './my_team';

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

  handlSubmit() {
    
  }

  render() {
    console.log(this.props.players);
    if (Object.keys(this.props.players).length === 0 && Object.keys(this.props.myTeam).length === 0) {
      return(
        <div></div>
      );
    } else {
      const p1 = this.props.players[Object.keys(this.props.players)[0]];

      let draftPlayer = this.props.draftPlayer;
      const players = values(this.props.players);
      const myPlayers = values(this.props.myTeam);
      const fillers = 8-myPlayers.length;
      let disabled = true;

      if (fillers === 0) {
        draftPlayer = () => console.log('');
        disabled = false;
      }

      for (let i = 0; i < fillers; i++) {
        myPlayers.push(
          {position: 'P', name: '-', ppg: 0, apg: 0, rpg: 0, image_url: 'http://shipinc.org/wp-content/themes/act-child/img/HeadShot%20Male%20Gray.png' }
        );
      }

      const playerItems = players.map(
        (player, idx) => <PlayerItem key={idx} player={player} draftPlayer={draftPlayer}/>
      );

      const myTeam = myPlayers.map(
        (player, idx) => <MyTeam key={idx} player={player} returnPlayer={this.props.returnPlayer} />
      );

      return (
        <div className='draft-page'>
          <div className='section'>
            <div className='list-title'>
              <div className='posheader'>
                {'POS'}
              </div>
              <div className='nameheader'>
                Name
              </div>
              <div className='ppgheader'>
                {'PPG'}
              </div>
              <div className='apgheader'>
                {'APG'}
              </div>
              <div className='rpgheader'>
                {'RPG'}
              </div>
              <div className='fppgheader'>
                {'FPPG'}
              </div>
            </div>
            <ul className='draft-list'>
              {playerItems}
            </ul>
          </div>
          <div className='section'>
            <div className='list-title'>
              My Team
            </div>
            <ul className='my-team'>
              {myTeam}
            </ul>
            <div>
              <button className='post-entry' disabled={disabled}>Submit</button>
            </div>
          </div>
        </div>
      );
    }
  }
}
