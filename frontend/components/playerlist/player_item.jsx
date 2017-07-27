import React from 'react';

export default class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwap = this.handleSwap.bind(this);
    this.state = {
      animClass: 'animated fadeInRight'
    };
  }

  handleSwap() {
    this.setState({animClass: 'animated fadeOutRight'});
    setTimeout(() => {
      this.props.draftPlayer(this.props.player);
    }, 400);
  }

  render() {
    const player = this.props.player;
    let fppg = player.ppg + player.apg*2 + player.rpg*1.2;
    fppg = Math.round(fppg*10)/10;
    return(
      <li className={`player-info ${this.state.animClass}`}>
        <div className='player-position'>
          {player.position}
        </div>
        <div className='headshot'>
          <img src={`${player.image_url}`} width='100' height='70'/>
        </div>
        <div className='player-name'>
          {player.name}
        </div>
        <span className='stat'>
          {player.ppg}
        </span>
        <span className='stat'>
          {player.apg}
        </span>
        <span className='stat'>
          {player.rpg}
        </span>
        <span className='stat'>
          {fppg}
        </span>
        <div className='draft-button'>
          <button onClick={this.handleSwap}>+</button>
        </div>
      </li>
    );
  }
}
