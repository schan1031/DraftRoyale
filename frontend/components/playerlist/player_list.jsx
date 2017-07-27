import React from 'react';
import { values } from 'lodash';
import PlayerItem from './player_item';
import MyTeam from './my_team';
import { Link } from 'react-router-dom';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      sortParam: 'ppg'
    };
    this.handleSort = this.handleSort.bind(this);
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
    }
  }

  handleSort(e) {
    console.log(e.target);
    // this.setState({sortParam: e.target.value});
  }

  handleSubmit() {
    const myTeam = this.props.myTeam;
    const keys = Object.keys(myTeam);
    const entry = { contest_id: this.props.contestId,
      p_one: myTeam[keys[0]].id,
      p_two: myTeam[keys[1]].id,
      p_three: myTeam[keys[2]].id,
      p_four: myTeam[keys[3]].id,
      p_five: myTeam[keys[4]].id,
      p_six: myTeam[keys[5]].id,
      p_seven: myTeam[keys[6]].id,
      p_eight: myTeam[keys[7]].id,
    };
    this.props.submitEntry(entry);
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
      const players = values(this.props.players).sort((a,b) => {
        return parseFloat(b[this.state.sortParam]) - parseFloat(a[this.state.sortParam]);
      });
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
        (player, idx) => <PlayerItem key={player.name} player={player} draftPlayer={draftPlayer} fillers={fillers}/>
      );

      const myTeam = myPlayers.map(
        (player, idx) => <MyTeam key={idx} player={player} returnPlayer={this.props.returnPlayer} />
      );

      return (
        <div className='draft-page'>
          <div className='section'>
            <div className='list-title'>
              <div className='posheader'>
                <span value='pos' onClick={this.handleSort}>{'POS'}</span>
              </div>
              <div className='nameheader'>
                <span>Name</span>
              </div>
              <div className='ppgheader'>
                <span value='ppg' onClick={this.handleSort}>{'PPG'}</span>
              </div>
              <div className='apgheader'>
                <span value='apg' onClick={this.handleSort}>{'APG'}</span>
              </div>
              <div className='rpgheader'>
                <span value='rpg' onClick={this.handleSort}>{'RPG'}</span>
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
            <ul className='my-team'>
              {myTeam}
            </ul>
            <div>
              <Link to='/dashboard'>
                <button className='post-entry' disabled={disabled} onClick={this.handleSubmit}>Submit</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
