class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.integer :user_id, null: false
      t.integer :contest_id, null: false
      t.integer :p_one, null: false
      t.integer :p_two, null: false
      t.integer :p_three, null: false
      t.integer :p_four, null: false
      t.integer :p_five, null: false
      t.integer :p_six, null: false
      t.integer :p_seven, null: false
      t.integer :p_eight, null: false

      t.timestamps
    end
    add_index :entries, :user_id
    add_index :entries, :contest_id
  end
end
