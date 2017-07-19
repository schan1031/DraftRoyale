@contests.each do |contest|
  json.set! contest.id do
    json.partial! 'api/contests/contest', contest: contest
  end
end
