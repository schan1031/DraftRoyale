import React from 'react';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='home'>
        <div className='main-page'>
          <h1>
            Experience the Game
          </h1>
          <button className='start-button'>Get Started Now!</button>
        </div>
        <div className='sub-info'>
          <div className='info-box'>
            Enhance your NBA experience.
          </div>
          <div className='info-box'>
            Play against friends.
          </div>
          <div className='info-box'>
            Earn points.
          </div>
        </div>
      </div>
    );
  }
}
