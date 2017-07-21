@schedules.each do |game|
  json.extract! game, :home_id, :away_id
end
