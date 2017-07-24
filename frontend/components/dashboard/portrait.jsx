import React from 'react';

export default class Portrait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const player = this.props.player;

    return(
      <div className='portrait'>
        <div className='headshot'>
          <img src={`${player.image_url}`} width='100' height='70'/>
        </div>
        <div>
          {player.name}
        </div>
      </div>
    );
  }
}
