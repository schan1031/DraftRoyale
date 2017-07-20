class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.string :position, null: false
      t.float :ppg, null: false, default: 0
      t.float :apg, null: false, default: 0
      t.float :rpg, null: false, default: 0
      t.float :spg, null: false, default: 0
      t.float :bpg, null: false, default: 0
      t.float :ft, null: false, default: 0
      t.float :fg, null: false, default: 0
      t.integer :height, null: false, default: 0
      t.integer :weight, null: false, default: 0
      t.integer :team_id, null: false
      t.string :image_url
      t.string :bio, default: 'No Information'

      t.timestamps
    end

    add_index :players, :team_id
  end
end
