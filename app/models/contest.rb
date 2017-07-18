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
#

class Contest < ApplicationRecord
end
