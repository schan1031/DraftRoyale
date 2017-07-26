import React from 'react';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className='landing'>
        <div className='leftlanding'>
          <h1>Welcome {this.props.currentUser.username}!</h1>
          <div className='landing-choices'>
            <div className = 'landchoice'>
              Get started with a contest.
              <button className='landing-button'>Contest Lobby</button>
            </div>
            <div className = 'landchoice'>
              Make your own contest.
              <button className='landing-button'>Create Contest</button>
            </div>
            <div className = 'landchoice'>
              View your upcoming contests.
              <button className='landing-button'>My Dashboard</button>
            </div>
          </div>
          <h2 className='news'>Player News</h2>
        </div>
        <div className='rightlanding'>
          <h2>What's a contest?</h2>
        </div>

      </div>
    );

  }
}
