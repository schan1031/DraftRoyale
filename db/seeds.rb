# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[User, Contest, Entry].map(&:destroy_all)

u1 = User.create(username: 'bob', password: 'password')
u2 = User.create(username: 'IamADemo', password: 'password')

Contest.create(creator_id: u1.id,
  max_contestants: 10,
  point_value: 50,
  name: 'NBA Jam',
  contest_date: Date.new(2017, 8, 8)
  )
