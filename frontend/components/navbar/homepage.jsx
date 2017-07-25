import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.lobbyOrLogin = this.lobbyOrLogin.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  lobbyOrLogin() {
    if (!this.props.currentUser) {
      return (
        <div>
          <button className='start-button' onClick={this.handleOpenModal}>Get Started Now!</button>
            <div className='modal-container'>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel='LogIn'
                className='login-modal'
                onRequestClose={this.handleCloseModal}
                >
                <SessionFormContainer />
              </ReactModal>
            </div>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/lobby'>
            <button className='start-button'>Contest Lobby</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    return(
      <div className='home'>
        <div className='main-page'>
          <h1>
            Experience the Game
          </h1>
          {this.lobbyOrLogin()}
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
