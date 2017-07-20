class CreateSchedules < ActiveRecord::Migration[5.1]
  def change
    create_table :schedules do |t|
      t.date :date, null: false
      t.integer :home_id, null: false
      t.integer :away_id, null: false

      t.timestamps
    end
    add_index :schedules, :home_id
    add_index :schedules, :away_id
  end
end
