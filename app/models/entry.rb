# == Schema Information
#
# Table name: entries
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  contest_id :integer          not null
#  p_one      :integer          not null
#  p_two      :integer          not null
#  p_three    :integer          not null
#  p_four     :integer          not null
#  p_five     :integer          not null
#  p_six      :integer          not null
#  p_seven    :integer          not null
#  p_eight    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Entry < ApplicationRecord
  validates :user_id, :contest_id, presence: true
  validates :user_id, uniqueness: { scope: :contest_id,
    message: 'Cannot enter the same contest multiple times' }
  validates :p_one, :p_two,
    :p_three, :p_four,
    :p_five, :p_six,
    :p_seven, :p_eight, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :contest,
    primary_key: :id,
    foreign_key: :contest_id,
    class_name: :Contest

end
