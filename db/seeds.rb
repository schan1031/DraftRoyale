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
  {name: 'Kristaps Porzingis', position: 'C', ppg: 16.1, apg: 1.4, rpg: 7.3, spg: 0.7, bpg: 1.9, ft: 0.811, fg: 0.436, height: 87, weight: 240, team_id: knicks_id, image_url: 'https://nba-players.herokuapp.com/players/porzingis/kristaps'}
]

nets = [
  {name: 'Jeremy Lin', position: 'PG', ppg: 12.0, apg: 4.5, rpg: 2.9, spg: 1.2, bpg: 0.4, ft: 0.804, fg: 0.433, height: 75, weight: 200, team_id: nets_id, image_url: 'https://nba-players.herokuapp.com/players/lin/jeremy'}
]

bulls = [
  {name: 'Dwyane Wade', position: 'SG', ppg: 23.3, apg: 5.7, rpg: 4.8, spg: 1.6, bpg: 0.9, ft: 0.768, fg: 0.484, height: 76, weight: 220, team_id: bulls_id, image_url: 'https://nba-players.herokuapp.com/players/wade/dwyane'}
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
