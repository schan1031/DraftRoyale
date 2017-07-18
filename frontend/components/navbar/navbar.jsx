import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className='nav-bar'>
        <div className='left-nav'>
          <span>img</span>
          <Link to='/'>
            DraftRoyale
          </Link>
        </div>

        <div className='right-nav'>
          <Link to='/dashboard'>
            <button>Dashboard</button>
          </Link>
          <Link to='/lobby'>
            <button>Lobby</button>
          </Link>
          <Link to='/createcontest'>
            <button>Create a Contest</button>
          </Link>
          <Link to='/login'>
            <button>Log In</button>
          </Link>
        </div>
      </nav>
    );
  }

}
