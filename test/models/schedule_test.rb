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

require 'test_helper'

class ScheduleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
