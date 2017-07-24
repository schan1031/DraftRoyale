@entries.each do |entry|
  json.set! entry.id do
    json.contest entry.contest, :name, :point_value, :max_contestants, :status
    json.p1 entry.playone
    json.p2 entry.playtwo
    json.p3 entry.playthree
    json.p4 entry.playfour
    json.p5 entry.playfive
    json.p6 entry.playsix
    json.p7 entry.playseven
    json.p8 entry.playeight
  end
end
