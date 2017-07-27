import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

export default class ContestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      point_value: '',
      max_contestants: '',
      // contest_date: null
      contest_date: new Date(Date.now())
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    const obj = {
      name: this.state.name,
      point_value: this.state.point_value,
      max_contestants: this.state.max_contestants,
      contest_date: this.state.contest_date
    };
    this.props.submitContest(obj);
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

  render() {
    const keys = Object.keys(this.props.contests);
    const count = keys.length;
    if (count > 0) {
      if (this.props.contests[keys[count-1]].name === this.state.name) {
        return <Redirect to='/lobby' />;
      }
    }

    if (!this.props.loggedIn) {
      return <Redirect to='/' />;
    }

    let disable = true;
    if (this.state.name && this.state.point_value && this.state.max_contestants) {
      disable = false;
    }

    return (
      <div className='contest-form-container animated fadeIn'>
        <div className='create-contest-form'>
          <h2>Enter Contest Details</h2>

          <div className='contest-input-field'>
            <span>Name</span>
            <input className='contest-input' type='text' value={this.state.name} onChange={this.update('name')}/>
          </div>

          <div className='contest-input-field'>
            <span>{'Point Value'}</span>
            <input className='contest-input' type='number' value={this.state.point_value} onChange={this.update('point_value')}/>
          </div>

          <div className='contest-input-field'>
            <span>Max Contestants</span>
            <input className='contest-input' type='number' value={this.state.max_contestants} onChange={this.update('max_contestants')}/>
          </div>

          <div className='contest-input-field'>
            <span>Date</span>
            <input className='contest-input' type='date' value={this.state.contest_date} onChange={this.update('contest_date')}/>
          </div>
          <div className='contest-form-error'>
            {this.renderErrors()}
          </div>

          <div>
            <button className='contest-button' disabled={disable} onClick={this.handleSubmit}>Submit</button>
          </div>

        </div>
      </div>
    );
  }
}

// <SingleDatePicker
//   date={this.state.contest_date} // momentPropTypes.momentObj or null
//   onDateChange={contest_date => this.setState({ contest_date })} // PropTypes.func.isRequired
//   focused={this.state.focused} // PropTypes.bool
//   onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
// />
