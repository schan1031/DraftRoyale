class ContestDate < ActiveRecord::Migration[5.1]
  def change
    add_column(:contests, :contest_date, :date, null: false)
  end
end
