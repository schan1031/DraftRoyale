@schedules.each do |game|
  json.set! game.date do
    json.extract! game, :date, :home_id, :away_id
  end
end
