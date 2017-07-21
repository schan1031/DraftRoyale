import React from 'react';

export default class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const player = this.props.player;

    return(
      <li>
        <div className='headshot'>
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
      </li>
    );
  }
}

// <img src={`${player.image_url}`} />
