class CreateContests < ActiveRecord::Migration[5.1]
  def change
    create_table :contests do |t|
      t.integer :creator_id, null: false
      t.integer :max_contestants, null: false
      t.integer :point_value, null: false
      t.string :name, null: false
      t.boolean :status, null: false, default: false
      t.date :contest_date, null: false

      t.timestamps
    end
    add_index :contests, :creator_id
  end
end
