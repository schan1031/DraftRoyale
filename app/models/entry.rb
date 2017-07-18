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
end
