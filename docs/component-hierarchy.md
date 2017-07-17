# Component Hierarchy

### AuthFormContainer
- AuthForm

Auth Form Container will hold the form for `Sign In` and `Sign Out`.

### NavContainer
- Location of AuthFormContainer
- Dispatches log out
- NavComponent
  - Dashboard
  - Lobby
  - Create Contest (form)
  - ProfileComponent
    - Profile
    - Dropdown to Log Out

The Nav Container has links to dashboard, lobby and create contest form.

### CreateFormContainer
- CreateForm Component (takes create action)

The Create Form Container will render the form to submit a new contest

### LobbyIndexContainer
- LobbyComponent
  - Full Lobby List
  - Filter Buttons
  - Enter Contest
  - ContestItemContainer
    - ContestItemComponent

The Lobby Index Container creates the full lobby list. Buttons to filter the rendered contests will be needed.

### PlayerListContainer
- PlayerListComponent
  - Take All Players as Props
  - Filters by Schedule
- My Team Component
  - Takes selected players
- Submit Button

The Player List Container shows all players active on the given night of the contest entered. Can be filtered by position or cost.

### MyDashboardContainer
- MyContestsComponent
  - Looks up current user contests
- MyInfoComponent
  - Looks up current user news

My dashboard displays contest history, contest statistics and some personal news.

### LiveBoardContainer
  - ScoreboardComponent
    - Contest schedule game scores updating
  - PlayerboardComponent
    - Player team scores updating along with game scores
  - StandingsComponent
    - Live standings of current player against the rest of the contestants

The Live Board Container keeps track of live score updates and the players in the particular contest. Player teams will update points as the game progresses, and live standings will appear on the side.
