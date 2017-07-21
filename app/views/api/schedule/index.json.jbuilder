@schedules.each do |game|
  json.set! game.id do
    json.extract! game, :date, :home_id, :away_id
  end
end
