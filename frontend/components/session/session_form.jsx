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
    this.props.processForm(this.state);
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

    const formType = this.props.formType;
    const otherType = (formType === '/login') ? 'signup' : 'login';
    const title = (formType === '/login') ? 'Log In' : 'Sign Up';

    return (
      <div>
        <h3>{title}</h3>
        <Link to={`/${otherType}`}>
          <button>{otherType}</button>
        </Link>
        {this.renderErrors()}
        <br/>
        <span>Username</span>
        <input type='text' value={this.state.username} onChange={this.updateUsername}/>
        <br/>
        <span>Password</span>
        <input type='password' value={this.state.pasword} onChange={this.updatePassword}/>
        <button onClick={this.handleSubmit}>Submit</button>

      </div>
    );
  }
}

export default withRouter(SessionForm);
