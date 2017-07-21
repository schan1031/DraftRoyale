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

    return(
      <li>
        <div className='headshot'>
          <img src={`${player.image_url}`} width='100' height='70'/>
        </div>
        <div className='player-name'>
          {player.name}
        </div>
        <div className='player-position'>
          {player.position}
        </div>
        <div className='height-weight'>
          {player.height} / {player.weight}
        </div>
        <button onClick={this.handleSwap}>Drop</button>
      </li>
    );
  }
}
