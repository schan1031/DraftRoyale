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
  validates :point_value, inclusion: { in: 1..5000, message: 'must be between 1 and 5000' }
  validates :max_contestants, inclusion: { in: 1..100, message: 'must be 100 or less' }
  # validate :contest_date_not_past

  def contest_date_not_past
    errors.add(:contest_date, "must be in the future.") if
      contest_date < Date.today
  end

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
