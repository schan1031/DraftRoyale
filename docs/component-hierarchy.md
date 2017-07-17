# Component Hierarchy

### AuthFormContainer
- AuthForm

Auth Form Container will hold the form for `Sign In` and `Sign Out`

### NavContainer
- Dispatches log out
- NavComponent
  - Dashboard
  - Lobby
  - Create Contest (form)
  - Profile

### LobbyIndexContainer
- LobbyComponent
  - Full Lobby List
  - Filter Buttons
  - Enter Contest

### PlayerListContainer
- PlayerListComponent
  - Take All Players as Props
  - Filters by Schedule
- My Team Component
  - Takes selected players
- Submit Button

### MyDashboardContainer
- MyContestsComponent
  - Looks up current user contests
- MyStatsComponent
  - Looks up current user statistics
- MyInfoComponent
  - Looks up current user bio
