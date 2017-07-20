# == Schema Information
#
# Table name: schedules
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  home_id    :integer          not null
#  away_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Schedule < ApplicationRecord
  validates :date, :home_id, :away_id, presence: true

  has_many :home_teams,
    primary_key: :id,
    foreign_key: :home_id,
    class_name: :Team

  has_many :away_teams,
    primary_key: :id,
    foreign_key: :away_id,
    class_name: :Team

end
