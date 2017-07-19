# == Schema Information
#
# Table name: entries
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  contest_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Entry < ApplicationRecord
  validates :user_id, :contest_id, presence: true
  validates :user_id, uniqueness: { scope: :contest_id,
    message: 'Cannot enter the same contest multiple times' }


  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :contest,
    primary_key: :id,
    foreign_key: :contest_id,
    class_name: :Contest

end
