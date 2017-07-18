import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.setState({ showModal: false });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  loginOrProfile() {
    if (!this.props.currentUser) {
      console.log('OPEN MODAL');
      return (
        <div>
          <button className='nav-button' onClick={this.handleOpenModal}>Log In</button>
          <div className='modal-container'>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel='LogIn'
              className='login-modal'
              >
              <SessionFormContainer />
            </ReactModal>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button className='nav-button' onClick={this.handleLogout}>Profile</button>
        </div>
      );
    }
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

          {this.loginOrProfile()}

        </div>
      </nav>
    );
  }

}

// <Link to='/login'>
//   <button className='nav-button'>{sess}</button>
// </Link>
