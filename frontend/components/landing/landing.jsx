import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.currentUser) {
      return <Redirect to='/' />;
    }

    const today = new Date();
    const months = ['January', 'February', 'March', 'April',
                      'May', 'June', 'July', 'August', 'Sepctember',
                      'October', 'November', 'December'];

    const todayStr = `${months[today.getMonth()]} ${today.getDate()}`;
    const yesterdayStr = `${months[today.getMonth()]} ${today.getDate()}`;

    return(

      <div className='landing'>
        <div className='leftlanding'>
          <h1>Welcome {this.props.currentUser.username}!</h1>
          <div className='landing-choices'>
            <div className = 'landchoice'>
              Get started with a contest.
              <Link to='/lobby'>
                <button className='landing-button'>Contest Lobby</button>
              </Link>
            </div>
            <div className = 'landchoice'>
              Make your own contest.
              <Link to='/createcontest'>
                <button className='landing-button'>Create Contest</button>
              </Link>
            </div>
            <div className = 'landchoice'>
              View your upcoming contests.
              <Link to='/dashboard'>
                <button className='landing-button'>My Dashboard</button>
              </Link>
            </div>
          </div>
          <h2 className='news'>Player News</h2>
          <ul className='newslist'>

            <li className='news-li'>
              <img className='news-img' src='http://nba-players.herokuapp.com/players/bryant/kobe'/>
              <div className='img-info'>
                <strong>Kobe Bryant</strong>
                <span className='news-date'>{todayStr}</span>
                <div className='news-body'>
                  Kobe Bryant scored 81 points versus the Raptors, going 28 of 46 from the field (60.3%).
                  With teammates like Sasha Vujacic, Smush Parker and Kwame Brown, it's no wonder he had to take all those shots.
                </div>
              </div>
            </li>

            <li className='news-li'>
              <img className='news-img' src='http://nba-players.herokuapp.com/players/curry/stephen' width='160' height='112' />
              <div className='img-info'>
                <strong>Steph Curry</strong>
                <span className='news-date'>May 10, 2016</span>
                <div className='news-body'>
                  Steph Curry became the first unanimous MVP in NBA history.
                  The "Baby Faced Assassin" led the Warriors to an NBA record 73 wins, all the while smashing his three point record with 402 3 point field goals.
                </div>
              </div>
            </li>

            <li className='news-li'>
              <img className='news-img' src='http://nba-players.herokuapp.com/players/durant/kevin' width='160' height='112' />
              <div className='img-info'>
                <strong>Kevin Durant</strong>
                <span className='news-date'>July 4, 2016</span>
                <div className='news-body'>
                  Kevin Durant announces he will sign with the Golden State Warriors. He will be leaving behind his running mate of 8 years, Russell Westbrook.
                  His announcement through the Players Tribune mentions how he will miss OKC, but looks forward to his chance to win a championship.
                </div>
              </div>
            </li>

          </ul>
        </div>
        <div className='rightlanding'>
          <div className='whatsacontest'>
            <h2 className='tabheader'>What's a contest?</h2>
            <span>
              A contest is a fantasy sports game in which you build a team of professional NBA players.
              Your team earns points based on the actual performance of your drafted players in their real life games that night.
              At the end of the night, your team's performance is compared to those of other entrants in your contests.
            </span>
          </div>

          <div className='howtoplay'>
            <h2 className='tabheader'>How to Play</h2>
            <span>
              Select a contest from the contest lobby, and click the enter button on the right.
              Choose your team of 8 players from the list of available players playing that night. Click the green button to add a player, up to 8 players.
              If you would like to remove a player from your team, click the red button to drop the player back into the player list.
              The FPPG statistic represents average fantasy points per game, the combination of their average stats. The aim is to build the team with the highet total FPPG at the end of the night.
            </span>
          </div>

        </div>

      </div>
    );

  }
}
