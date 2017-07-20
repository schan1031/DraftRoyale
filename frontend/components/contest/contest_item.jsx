import React from 'react';

const ContestItem = ( { contest } ) => {
  const prizePot = contest.point_value*contest.max_contestants;
  return (
    <li className='contest-item'>
      <span className='contest-name'>contest.name</span>
      <span>contest.point_value</span>
      <span>contest.max_contestants</span>
      <span>{prizePot}</span>
    </li>
  );
};

export default ContestItem;
