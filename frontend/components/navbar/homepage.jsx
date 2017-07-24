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
            <img className='info-img' alt="Icon" src="/assets/jumpman" height='150' width='150'/>
            <span className='info-text'>
              Enhance your NBA experience.
            </span>
          </div>
          <div className='info-box'>
            <img className='info-img' alt="Icon" src="/assets/users" height='150' width='150'/>
            <span className='info-text'>
              Play against friends.
            </span>
          </div>
          <div className='info-box'>
            <img className='info-img' alt="Icon" src="/assets/coins" height='150' width='150'/>
            <span className='info-text'>
              Earn points and prizes!
            </span>
          </div>
        </div>
      </div>
    );
  }
}
