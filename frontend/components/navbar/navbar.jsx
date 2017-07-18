import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sess = this.props.currentUser ? 'Profile' : 'Log In';

    return(
      <nav className='nav-bar'>
        <div className='left-nav'>
          <Link to='/'>
            <button className='title'>logo</button>
            <button className='title'>DraftRoyale</button>
          </Link>
        </div>

        <div className='right-nav'>
          <Link to='/dashboard'>
            <button className='nav-button'>Dashboard</button>
          </Link>
          <Link to='/lobby'>
            <button className='nav-button'>Lobby</button>
          </Link>
          <Link to='/createcontest'>
            <button className='nav-button'>Create a Contest</button>
          </Link>
          <Link to='/login'>
            <button className='nav-button'>{sess}</button>
          </Link>
        </div>
      </nav>
    );
  }

}
