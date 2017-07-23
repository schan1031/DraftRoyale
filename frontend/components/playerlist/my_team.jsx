import React from 'react';

export default class MyTeam extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwap = this.handleSwap.bind(this);
  }

  handleSwap() {
    this.props.returnPlayer(this.props.player);
  }

  render () {
    const player = this.props.player;
    let fppg = player.ppg + player.apg*2 + player.rpg*1.2;
    fppg = Math.round(fppg*10)/10;
    let wid = '';

    if (player.image_url === 'http://shipinc.org/wp-content/themes/act-child/img/HeadShot%20Male%20Gray.png') {
      wid = '70';
    } else {
      wid='100';
    }

    return(
      <li className='player-info'>
        <div className='drop-button'>
          <button onClick={this.handleSwap}>-</button>
        </div>
        <div className='player-position'>
          {player.position}
        </div>
        <div className='headshot'>
          <img src={`${player.image_url}`} width={wid} height='70'/>
        </div>
        <div className='player-name'>
          {player.name}
        </div>
        <div className='stats-myteam'>
          <span className='stat'>
            {fppg}
          </span>
        </div>
      </li>
    );
  }
}
