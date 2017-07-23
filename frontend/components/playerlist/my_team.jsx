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
    return(
      <li className='player-info'>
        <div className='player-position'>
          {player.position}
        </div>
        <div className='headshot'>
          <img src={`${player.image_url}`} width='100' height='70'/>
        </div>
        <div className='player-name'>
          {player.name}
        </div>
        <div className='stats-myteam'>
          <span className='stat'>
            FPPg: {fppg}
          </span>
        </div>
        <div className='draft-button'>
          <button onClick={this.handleSwap}>+</button>
        </div>
      </li>
    );
  }
}
