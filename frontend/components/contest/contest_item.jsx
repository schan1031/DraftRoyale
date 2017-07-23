import React from 'react';
import { Link } from 'react-router-dom';

class ContestItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
  }


  handleEnter(e) {
    this.props.chooseContest(this.props.contest.id);
    this.props.fetchSchedule(e.target.value);
  }

  render () {
    const contest = this.props.contest;
    const prizePot = contest.point_value*contest.max_contestants;

    return (
      <tr className='contest-item'>
        <td className='contest-data-l'>{contest.name}</td>
        <td className='contest-data-s'>{contest.point_value}</td>
        <td className='contest-data-s'>{contest.max_contestants}</td>
        <td className='contest-data-s'>{prizePot}</td>
        <td className='contest-data-s'>{contest.contest_date}</td>
        <td className='enter-contest'>
          <Link to={`/contest/draft/${contest.id}`}>
            <button className='enter-button' value={contest.contest_date} onClick={this.handleEnter}>Enter</button>
          </Link>
        </td>
      </tr>
    );
  }
}

export default ContestItem;
