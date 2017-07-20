# == Schema Information
#
# Table name: players
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  position   :string           not null
#  ppg        :float            default(0.0), not null
#  apg        :float            default(0.0), not null
#  rpg        :float            default(0.0), not null
#  spg        :float            default(0.0), not null
#  bpg        :float            default(0.0), not null
#  ft         :float            default(0.0), not null
#  fg         :float            default(0.0), not null
#  height     :integer          default(0), not null
#  weight     :integer          default(0), not null
#  team_id    :integer          not null
#  image_url  :string
#  bio        :string           default("No Information")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Player < ApplicationRecord
  validates :name, :position, :team_id, presence: true

  belongs_to :team,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Team

end
