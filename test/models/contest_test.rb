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

require 'test_helper'

class ContestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
