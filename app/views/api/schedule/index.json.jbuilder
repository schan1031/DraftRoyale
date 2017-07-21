@schedules.each do |game|
  json.extract! game, :date, :home_id, :away_id
end
