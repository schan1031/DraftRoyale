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

require 'test_helper'

class EntryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
