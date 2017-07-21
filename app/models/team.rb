# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  bio        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true

  has_many :players,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Player

  has_many :home_game,
    primary_key: :id,
    foreign_key: :home_id,
    class_name: :Schedule

  has_many :away_game,
    primary_key: :id,
    foreign_key: :away_id,
    class_name: :Schedule
end
