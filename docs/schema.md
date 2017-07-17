# Database Schema

## users

Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
username|string|not null, unique
email|string|not null, unique
password_digest|string|not null
account_points|integer|

## contests

Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
creator_id|integer|not null, foreign_key
max_contestants|integer|not null
point_value|integer|not null
name|string|not null

## players
Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
name|string|not null
ppg|integer|
apg|integer|
rpg|integer|
spg|integer|
bpg|integer|
ft%|integer|
fg%|integer|
height|integer|
weight|integer|
team_id|integer|not null, foreign_key

## teams

Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
name|string|not null
