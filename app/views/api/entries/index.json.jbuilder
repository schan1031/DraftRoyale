@entries.each do |entry|
  json.set! entry.id do
    json.partial! 'api/entries/entry', entry: entry
    json.contest entry.contest, :name, :point_value, :max_contestants
  end
end
