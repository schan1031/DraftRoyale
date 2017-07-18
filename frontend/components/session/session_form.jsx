import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.value === 'signup') {
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>
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

    // const formType = this.props.formType;
    // const otherType = (formType === '/login') ? 'signup' : 'login';
    // const title = (formType === '/login') ? 'Log In' : 'Sign Up';

    return (
      <div>
        <h3>Sign In/Log In</h3>
        {this.renderErrors()}
        <br/>
        <span>Username</span>
        <input type='text' value={this.state.username} onChange={this.updateUsername}/>
        <br/>
        <span>Password</span>
        <input type='password' value={this.state.password} onChange={this.updatePassword}/>

        <button value={'signup'} onClick={this.handleSubmit}>Sign Up</button>
        <button value={'login'} onClick={this.handleSubmit}>Log In</button>

      </div>
    );
  }
}

export default withRouter(SessionForm);
