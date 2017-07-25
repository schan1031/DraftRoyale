# == Schema Information
#
# Table name: contests
#
#  id              :integer          not null, primary key
#  creator_id      :integer          not null
#  max_contestants :integer          not null
#  point_value     :integer          not null
#  name            :string           not null
#  status          :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  contest_date    :date             not null
#

class Contest < ApplicationRecord
  validates :creator, :max_contestants, :point_value, :name, presence: true

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  has_many :entries,
    primary_key: :id,
    foreign_key: :contest_id,
    class_name: :Entry

  has_many :entrants,
    through: :entries,
    source: :user
end
