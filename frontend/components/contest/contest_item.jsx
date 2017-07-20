import React from 'react';

const ContestItem = ( { contest } ) => {
  const prizePot = contest.point_value*contest.max_contestants;
  return (
    <tr className='contest-item'>
      <td className='contest-data-l'>{contest.name}</td>
      <td className='contest-data-s'>{contest.point_value}</td>
      <td className='contest-data-s'>{contest.max_contestants}</td>
      <td className='contest-data-s'>{prizePot}</td>
      <td className='enter-contest'>
        <button className='enter-button'>Enter</button>
      </td>
    </tr>
  );
};

export default ContestItem;
