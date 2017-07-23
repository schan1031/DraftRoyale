import React from 'react';

export default class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwap = this.handleSwap.bind(this);
  }

  handleSwap() {
    this.props.draftPlayer(this.props.player);
  }

  render() {
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
        <div className='stats'>
          <span className='stat'>
            PPg: {player.ppg}
          </span>
          <span className='stat'>
            APg:{player.apg}
          </span>
          <span className='stat'>
            RPg:{player.rpg}
          </span>
          <span className='stat'>
            FPPg:{fppg}
          </span>
        </div>
        <button className='draft-button' onClick={this.handleSwap}>Draft</button>
      </li>
    );
  }
}
