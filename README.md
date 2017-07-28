# DraftRoyale

[DraftRoyale](www.draftroyale.co 'DraftRoyale Homepage')

Draft Royale is a web-app inspired by daily fantasy games, such as [DraftKings](https://www.draftkings.com/). DraftRoyale requires no real money to play, and is meant solely to enhance your NBA experience.


## Features

- Secure user authentication
- Creating public contests for anyone to enter
- Contest lobby to view or enter all contests
- Drafting interface to form the ideal team to enter contests
- Dashboard to view your upcoming contests and past contests

## Project Design

DraftRoyale was designed and built in two weeks, based off the concept of Daily Fantasy games, without the gambling risk. View the original proposal at [DraftRoyale Proposal](https://github.com/schan1031/DraftRoyale/tree/master/docs)

### Implementation

#### Authentication
- Users are prompted to log in through a modal before options for contests appear
- Attempting to manually go to other pages will redirect to homepage if not logged in
- Accomplished using `Redirect` from `react-router-dom`, checking the current session for a logged in User

```
import { Redirect } from 'react-router-dom';

...

if (!this.props.loggedIn) {
  return <Redirect to='/' />;
}
```

#### Landing
- After logging in or signing up, users are directed to a landing page.
- The landing page gives a run down of what DraftRoyale does.
- Links to lobby, dashboard, contest creation provided.

![landing](./public/loginlanding.gif)

#### Contest Creation

- Users can create contests once logged in.
- Only accepts contests with all parameters filled out.
- Does not accept contests with past dates.
- Defaults to current date

![createform](./public/createcontest.gif)

#### Contest Lobby

- Lists all contests the user is not currently entered in.
- Backend SQL query only requests contests not entered.
- Can enter any contests and directs to draft page for contest.

![lobby](./public/lobbyentry.gif)

```
def index
  ids = []
  current_user.entered_contests.each do |contest|
    ids.push(contest.id)
  end
  if ids.length > 0
    @contests = Contest.where('id NOT IN (?)', ids)
  else
    @contests = Contest.all
  end
  render :index
end
```
The above code is a modified return on the `GET` index route to `api/contests` to perform the equivalent query:

```
SELECT
  *
FROM
  contests
WHERE
  id NOT IN (ids)
```

#### Draft Page

- Based on contest date, game schedule is loaded.
- Player list is generated based on only teams playing that day.
- Players can be drafted onto user team, or dropped back into the player list.
- User team can have a maximum of eight players, at which point the submit button becomes available.
- Animations done with Animate CSS.

![draft](./public/croppeddraft.gif)

#### Dashboard

- Dashboard shows the contests a user has entered
- Based on date, contests are distributed into past or upcoming
- Entries are searched based on current user entries.
- SQL modification on the index route of Entries provides only entered contests by the current user.

The Contest entered and the players drafted are pulled through the database using associations in our JBuilder view, allowing for one API request to pull the information of three separate requests.

```
@entries.each do |entry|
  json.set! entry.id do
    json.contest entry.contest, :name, :point_value, :max_contestants, :contest_date, :status
    json.p1 entry.playone
    json.p2 entry.playtwo
    json.p3 entry.playthree
    json.p4 entry.playfour
    json.p5 entry.playfive
    json.p6 entry.playsix
    json.p7 entry.playseven
    json.p8 entry.playeight
  end
end
```

![draft](./public/dashboard.png)

## Future Plans

### Frontend

- Graphs representing the users contests entered over time
- Profile information, tracking points
- Live updating scoreboard for current events

### Backend

- System for automatically updating database with real information
- Form of calculating the results of contests in real time
