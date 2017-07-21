# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[User, Contest, Entry, Player, Team, Schedule].map(&:destroy_all)

teams = %w(New\ York\ Knicks Houston\ Rockets
Brooklyn\ Nets Los\ Angeles\ Lakers
Los\ Angeles\ Clippers Golden\ State\ Warriors
Sacramento\ Kings, San\ Antonio\ Spurs
Cleveland\ Cavaliers Boston\ Celtics
Oklahoma\ City\ Thunder Chicago\ Bulls
Toronto\ Raptors Miami\ Heat
Milwaukee\ Bucks Philadelphia\ 76ers
New\ Orleans\ Pelicans Dallas\ Mavericks
Washington\ Wizards Portland\ Trailblazers
Phoenix\ Suns Indiana\ Pacers
Minnesota\ Timberwolves Detroit\ Pistons
Atlanta\ Hawks Denver\ Nuggets
Orlando\ Magic Memphis\ Grizzlies
Charlotte\ Hornets Utah\ Jazz
)

teams.each do |team|
  Team.create(name: team)
end

knicks_id = Team.first.id
nets_id = Team.find_by_name('Brooklyn Nets').id
bulls_id = Team.find_by_name('Chicago Bulls').id


u1 = User.create(username: 'bob', password: 'password')
u2 = User.create(username: 'IamADemo', password: 'password')

c1 = Contest.create(creator_id: u1.id,
  max_contestants: 10,
  point_value: 50,
  name: 'NBA Jam',
  contest_date: Date.new(2017, 8, 8)
)

c2 = Contest.create(creator_id: u2.id,
  max_contestants: 20,
  point_value: 50,
  name: 'Kobe!!!!',
  contest_date: Date.new(2017, 7, 25)
)

knicks = [
  {name: 'Carmelo Anthony', position: 'PF', ppg: 22.4, apg: 2.9, rpg: 5.9, spg: 0.8, bpg: 0.5, ft: 0.833, fg: 0.433, height: 80, weight: 240, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/anthony/carmelo'},
  {name: 'Kristaps Porzingis', position: 'C', ppg: 16.1, apg: 1.4, rpg: 7.3, spg: 0.7, bpg: 1.9, ft: 0.811, fg: 0.436, height: 87, weight: 240, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/porzingis/kristaps'},
  {name: 'Derrick Rose', position: 'PG', ppg: 18.0, apg: 4.4, rpg: 3.8, spg: 0.7, bpg: 0.3, ft: 0.874, fg: 0.471, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/rose/derrick'},
  {name: 'Courtney Lee', position: 'SG', ppg: 10.8, apg: 2.3, rpg: 3.4, spg: 1.1, bpg: 0.3, ft: 0.867, fg: 0.456, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/lee/courtney'},
  {name: 'Brandon Jennings', position: 'PG', ppg: 8.6, apg: 4.9, rpg: 2.6, spg: 0.9, bpg: 0.1, ft: 0.756, fg: 0.380, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/jennings/brandon'},
  {name: 'Joakim Noah', position: 'C', ppg: 5.0, apg: 2.2, rpg: 8.8, spg: 0.7, bpg: 0.8, ft: 0.436, fg: 0.490, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/noah/joakim'},
  {name: 'Lance Thomas', position: 'PF', ppg: 6.0, apg: 0.8, rpg: 3.1, spg: 0.5, bpg: 0.1, ft: 0.843, fg: 0.398, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/thomas/lance'},
  {name: 'Justin Holiday', position: 'SG', ppg: 7.7, apg: 1.2, rpg: 2.7, spg: 0.8, bpg: 0.4, ft: 0.825, fg: 0.433, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/holiday/justin'},
  {name: 'Willy Hernangomez', position: 'PF', ppg: 8.2, apg: 1.3, rpg: 7.0, spg: 0.6, bpg: 0.5, ft: 0.728, fg: 0.529, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/hernangomez/willy'},
  {name: 'Ron Baker', position: 'PF', ppg: 4.1, apg: 2.1, rpg: 1.9, spg: 0.7, bpg: 0.2, ft: 0.651, fg: 0.378, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/baker/ron'},
  {name: 'Kyle OQuinn', position: 'PF', ppg: 6.3, apg: 1.5, rpg: 5.6, spg: 0.5, bpg: 1.3, ft: 0.771, fg: 0.521, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/oquinn/kyle'},
  {name: 'Mindaugas Kuzminskas', position: 'PF', ppg: 6.3, apg: 1.0, rpg: 1.9, spg: 0.4, bpg: 0.2, ft: 0.809, fg: 0.428, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/kuzminskas/mindaugas'},
  {name: 'Chasson Randle', position: 'PF', ppg: 5.3, apg: 1.6, rpg: 1.5, spg: 0.3, bpg: 0.1, ft: 0.935, fg: 0.389, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/randle/chasson'},
  {name: 'Maurice Ndour', position: 'PF', ppg: 3.1, apg: 0.3, rpg: 2.0, spg: 0.5, bpg: 0.3, ft: 0.731, fg: 0.453, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/ndour/maurice'},
  {name: 'Sasha Vujacic', position: 'PF', ppg: 3.0, apg: 1.2, rpg: 1.4, spg: 0.3, bpg: 0.0, ft: 0.708, fg: 0.309, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/vujacic/sasha'},
  {name: 'Marshall Plumlee', position: 'PF', ppg: 1.9, apg: 0.5, rpg: 2.4, spg: 0.2, bpg: 0.2, ft: 0.421, fg: 0.533, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/plumlee/marshall'}
]

nets = [
  {name: 'Jeremy Lin', position: 'PG', ppg: 12.0, apg: 4.5, rpg: 2.9, spg: 1.2, bpg: 0.4, ft: 0.804, fg: 0.433, height: 75, weight: 200, team_id: nets_id, image_url: 'https://nba-players.herokuapp.com/players/lin/jeremy'},
  {name: 'Brook Lopez', position: 'PF', ppg: 20.5, apg: 2.3, rpg: 5.4, spg: 0.5, bpg: 1.7, ft: 0.810, fg: 0.474, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/lopez/brook'},
  {name: 'Bojan Bogdanovic', position: 'PF', ppg: 14.2, apg: 1.6, rpg: 3.6, spg: 0.4, bpg: 0.1, ft: 0.874, fg: 0.440, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/bogdanovic/bojan'},
  {name: 'Sean Kilpatrick', position: 'PF', ppg: 13.1, apg: 2.2, rpg: 4.0, spg: 0.6, bpg: 0.1, ft: 0.843, fg: 0.415, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/kilpatrick/sean'},
  {name: 'Trevor Booker', position: 'PF', ppg: 10.0, apg: 1.9, rpg: 8.0, spg: 1.1, bpg: 0.4, ft: 0.673, fg: 0.516, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/booker/trevor'},
  {name: 'Rondae Hollis-Jefferson', position: 'PF', ppg: 8.7, apg: 2.0, rpg: 5.8, spg: 1.1, bpg: 0.6, ft: 0.751, fg: 0.434, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/hollis-jefferson/rondae'},
  {name: 'Spencer Dinwiddie', position: 'PF', ppg: 7.3, apg: 3.1, rpg: 2.8, spg: 0.7, bpg: 0.4, ft: 0.792, fg: 0.444, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/dinwiddie/spencer'},
  {name: 'Isaiah Whitehead', position: 'PF', ppg: 7.4, apg: 2.6, rpg: 2.5, spg: 0.6, bpg: 0.5, ft: 0.805, fg: 0.402, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/whitehead/isaiah'},
  {name: 'Joe Harris', position: 'PF', ppg: 8.2, apg: 1.0, rpg: 2.8, spg: 0.6, bpg: 0.2, ft: 0.714, fg: 0.425, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/harris/joe'},
  {name: 'Caris LeVert', position: 'PF', ppg: 8.2, apg: 1.9, rpg: 3.3, spg: 0.9, bpg: 0.1, ft: 0.720, fg: 0.450, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/levert/caris'},
  {name: 'Randy Foye', position: 'PF', ppg: 5.2, apg: 2.0, rpg: 2.2, spg: 0.5, bpg: 0.1, ft: 0.857, fg: 0.363, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/foye/randy'},
  {name: 'Justin Hamilton', position: 'PF', ppg: 6.9, apg: 0.9, rpg: 4.1, spg: 0.5, bpg: 0.7, ft: 0.750, fg: 0.459, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/hamilton/justin'},
  {name: 'Quincy Acy', position: 'PF', ppg: 6.5, apg: 0.6, rpg: 3.3, spg: 0.4, bpg: 0.5, ft: 0.754, fg: 0.425, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/acy/quincy'},
  {name: 'Archie Goodwin', position: 'PF', ppg: 7.9, apg: 1.9, rpg: 2.3, spg: 0.3, bpg: 0.3, ft: 0.719, fg: 0.557, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/goodwin/archie'},
  {name: 'Yogi Ferrell', position: 'PF', ppg: 5.4, apg: 1.7, rpg: 1.2, spg: 0.2, bpg: 0.2, ft: 0.625, fg: 0.367, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/ferrell/yogi'},
  {name: 'K.J. McDaniels', position: 'PF', ppg: 6.3, apg: 0.5, rpg: 2.6, spg: 0.6, bpg: 0.5, ft: 0.821, fg: 0.455, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/mcdaniels/kj'},
  {name: 'Greivis Vasquez', position: 'PF', ppg: 2.3, apg: 1.7, rpg: 0.7, spg: 0.3, bpg: 0.3, ft: 0.667, fg: 0.250, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/vasquez/greivis'},
  {name: 'Luis Scola', position: 'PF', ppg: 5.1, apg: 1.0, rpg: 3.9, spg: 0.4, bpg: 0.1, ft: 0.676, fg: 0.470, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/scola/luis'},
  {name: 'Anthony Bennett', position: 'PF', ppg: 5.0, apg: 0.5, rpg: 3.4, spg: 0.2, bpg: 0.1, ft: 0.722, fg: 0.413, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/bennett/anthony'},
  {name: 'Chris McCullough', position: 'PF', ppg: 2.5, apg: 0.1, rpg: 1.2, spg: 0.1, bpg: 0.1, ft: 0.667, fg: 0.516, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/mccullough/chris'}
]

bulls = [
  {name: 'Dwyane Wade', position: 'SG', ppg: 23.3, apg: 5.7, rpg: 4.8, spg: 1.6, bpg: 0.9, ft: 0.768, fg: 0.484, height: 76, weight: 220, team_id: bulls_id, image_url: 'https://nba-players.herokuapp.com/players/wade/dwyane'},
  {name: 'Jimmy Butler', position: 'PF', ppg: 23.9, apg: 5.5, rpg: 6.2, spg: 1.9, bpg: 0.4, ft: 0.865, fg: 0.455, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/butler/jimmy'},
  {name: 'Dwyane Wade', position: 'PF', ppg: 18.3, apg: 3.8, rpg: 4.5, spg: 1.4, bpg: 0.7, ft: 0.794, fg: 0.434, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/wade/dwyane'},
  {name: 'Robin Lopez', position: 'PF', ppg: 10.4, apg: 1.0, rpg: 6.4, spg: 0.2, bpg: 1.4, ft: 0.721, fg: 0.493, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/lopez/robin'},
  {name: 'Taj Gibson', position: 'PF', ppg: 11.6, apg: 1.1, rpg: 6.9, spg: 0.5, bpg: 0.9, ft: 0.714, fg: 0.521, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/gibson/taj'},
  {name: 'Rajon Rondo', position: 'PF', ppg: 7.8, apg: 6.7, rpg: 5.1, spg: 1.4, bpg: 0.2, ft: 0.600, fg: 0.408, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/rondo/rajon'},
  {name: 'Doug McDermott', position: 'PF', ppg: 10.2, apg: 1.0, rpg: 3.0, spg: 0.3, bpg: 0.1, ft: 0.881, fg: 0.445, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/mcdermott/doug'},
  {name: 'Nikola Mirotic', position: 'PF', ppg: 10.6, apg: 1.1, rpg: 5.5, spg: 0.8, bpg: 0.8, ft: 0.773, fg: 0.413, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/mirotic/nikola'},
  {name: 'Paul Zipser', position: 'PF', ppg: 5.5, apg: 0.8, rpg: 2.8, spg: 0.3, bpg: 0.4, ft: 0.775, fg: 0.398, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/zipser/paul'},
  {name: 'Michael Carter-Williams', position: 'PF', ppg: 6.6, apg: 2.5, rpg: 3.4, spg: 0.8, bpg: 0.5, ft: 0.753, fg: 0.366, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/carter-williams/michael'},
  {name: 'Denzel Valentine', position: 'PF', ppg: 5.1, apg: 1.1, rpg: 2.6, spg: 0.5, bpg: 0.1, ft: 0.778, fg: 0.354, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/valentine/denzel'},
  {name: 'Jerian Grant', position: 'PF', ppg: 5.9, apg: 1.9, rpg: 1.8, spg: 0.7, bpg: 0.1, ft: 0.890, fg: 0.425, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/grant/jerian'},
  {name: 'Cristiano Felicio', position: 'PF', ppg: 4.8, apg: 0.6, rpg: 4.7, spg: 0.4, bpg: 0.3, ft: 0.645, fg: 0.579, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/felicio/cristiano'},
  {name: 'Bobby Portis', position: 'PF', ppg: 6.8, apg: 0.5, rpg: 4.6, spg: 0.3, bpg: 0.2, ft: 0.661, fg: 0.488, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/portis/bobby'},
  {name: 'Isaiah Canaan', position: 'PF', ppg: 4.6, apg: 0.9, rpg: 1.3, spg: 0.6, bpg: 0.0, ft: 0.909, fg: 0.364, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/canaan/isaiah'},
  {name: 'Cameron Payne', position: 'PF', ppg: 4.9, apg: 1.4, rpg: 1.5, spg: 0.4, bpg: 0.0, ft: 0.250, fg: 0.333, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/payne/cameron'}
]

celtics = [
  {name: 'Isaiah Thomas', position: 'PF', ppg: 28.9, apg: 5.9, rpg: 2.7, spg: 0.9, bpg: 0.2, ft: 0.909, fg: 0.463, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/thomas/isaiah'},
  {name: 'Avery Bradley', position: 'PF', ppg: 16.3, apg: 2.2, rpg: 6.1, spg: 1.2, bpg: 0.2, ft: 0.731, fg: 0.463, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/bradley/avery'},
  {name: 'Jae Crowder', position: 'PF', ppg: 13.9, apg: 2.2, rpg: 5.8, spg: 1.0, bpg: 0.3, ft: 0.811, fg: 0.463, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/crowder/jae'},
  {name: 'Al Horford', position: 'PF', ppg: 14.0, apg: 5.0, rpg: 6.8, spg: 0.8, bpg: 1.3, ft: 0.800, fg: 0.473, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/horford/al'},
  {name: 'Marcus Smart', position: 'PF', ppg: 10.6, apg: 4.6, rpg: 3.9, spg: 1.6, bpg: 0.4, ft: 0.812, fg: 0.359, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/smart/marcus'},
  {name: 'Kelly Olynyk', position: 'PF', ppg: 9.0, apg: 2.0, rpg: 4.8, spg: 0.6, bpg: 0.4, ft: 0.732, fg: 0.512, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/olynyk/kelly'},
  {name: 'Amir Johnson', position: 'PF', ppg: 6.5, apg: 1.8, rpg: 4.6, spg: 0.6, bpg: 0.8, ft: 0.670, fg: 0.576, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/johnson/amir'},
  {name: 'Jaylen Brown', position: 'PF', ppg: 6.6, apg: 0.8, rpg: 2.8, spg: 0.4, bpg: 0.2, ft: 0.685, fg: 0.454, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/brown/jaylen'},
  {name: 'Terry Rozier', position: 'PF', ppg: 5.5, apg: 1.8, rpg: 3.1, spg: 0.6, bpg: 0.1, ft: 0.773, fg: 0.367, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/rozier/terry'},
  {name: 'Jonas Jerebko', position: 'PF', ppg: 3.8, apg: 0.9, rpg: 3.5, spg: 0.3, bpg: 0.2, ft: 0.703, fg: 0.435, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/jerebko/jonas'},
  {name: 'Gerald Green', position: 'PF', ppg: 5.6, apg: 0.7, rpg: 1.8, spg: 0.2, bpg: 0.1, ft: 0.805, fg: 0.409, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/green/gerald'},
  {name: 'Tyler Zeller', position: 'PF', ppg: 3.5, apg: 0.8, rpg: 2.4, spg: 0.1, bpg: 0.4, ft: 0.564, fg: 0.494, height: 76, weight: 220, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/zeller/tyler'}
]

knicks.each do |player|
  Player.create(player)
end

nets.each do |player|
  Player.create(player)
end

bulls.each do |player|
  Player.create(player)
end

e1 = {user_id: u1.id, contest_id: c1.id,
  p_one: Player.find_by_name('Carmelo Anthony').id,
  p_two: Player.find_by_name('Kristaps Porzingis').id,
  p_three: Player.find_by_name('Jeremy Lin').id,
  p_four: Player.first.id,
  p_five: Player.first.id,
  p_six: Player.first.id,
  p_seven: Player.first.id,
  p_eight: Player.first.id
}

Entry.create(e1)

Schedule.create(date: Date.new(2017, 7, 25), home_id: knicks_id, away_id: nets_id )
Schedule.create(date: Date.new(2017, 7, 25), home_id: nets_id, away_id: knicks_id )
Schedule.create(date: Date.new(2017, 7, 25), home_id: bulls_id, away_id: knicks_id )
Schedule.create(date: Date.new(2017, 7, 20), home_id: bulls_id, away_id: knicks_id)
Schedule.create(date: Date.new(2017, 7, 20), home_id: nets_id, away_id: bulls_id)
