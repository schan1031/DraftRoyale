class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.integer :user_id, null: false
      t.integer :contest_id, null: false

      t.timestamps
    end
    add_index :entries, :user_id
    add_index :entries, :contest_id
  end
end
