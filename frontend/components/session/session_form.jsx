import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
		super(props);
    this.demoUser = 'IamADemo';
    this.demoPassword = 'password';
		this.state = {
			username: "",
			password: ""
		};
    this.logDemoIn = this.logDemoIn.bind(this);
    this.demo = this.demo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  updateUsername(e) {
    this.setState({username: e.target.value});
    this.props.clearErrors();
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.value === 'signup') {
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  logDemoIn() {
    this.props.login(this.state);
  }

  handleDemo() {
    if (this.state.username) {
      this.state = {
        username: "",
  			password: ""
      };
    }
    this.intervalID = setInterval(this.demo, 75);
  }

  demo() {
    if (this.demoUser.length > 0) {
      const newstate = this.state.username + this.demoUser[0];
      this.demoUser = this.demoUser.slice(1);
      this.setState({username: newstate});
    } else if (this.demoPassword.length > 0) {
      const newstate = this.state.password + this.demoPassword[0];
      this.demoPassword = this.demoPassword.slice(1);
      this.setState({password: newstate});
    } else {
      clearInterval(this.intervalID);
      window.setTimeout(this.logDemoIn, 200);
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx} className='error'>
                {error}
              </li>
            )
          )}
        </ul>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render () {

    if (this.props.loggedIn) {
      return <Redirect to='/' />;
    }

    return (
      <div className='session-form'>
        <h2>Play Now!</h2>

        <div className='errors'>
          {this.renderErrors()}
        </div>

        <div className='input-field'>
          <span>Username</span>
          <input className='session-input' type='text' value={this.state.username} onChange={this.updateUsername}/>
        </div>

        <div className='input-field'>
          <span>Password</span>
          <input className='session-input' type='password' value={this.state.password} onChange={this.updatePassword}/>
        </div>

        <div className='session-buttons'>
          <button className='signup-button' value={'signup'} onClick={this.handleSubmit}>Sign Up</button>
          <button className='login-button' value={'login'} onClick={this.handleSubmit}>Log In</button>
        </div>

        <button className='demologin-button' value={'login'} onClick={this.handleDemo}>Demo Login</button>


      </div>
    );
  }
}

export default withRouter(SessionForm);

// <div className='errors'>
//   {this.renderErrors()}
// </div>
