json.array! @contests do |contest|
  json.partial! 'api/contests/contest', contest: contest
end
