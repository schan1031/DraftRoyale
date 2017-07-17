# Database Schema
---
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
ppg|integer|not null, default 0
apg|integer|not null, default 0
rpg|integer|not null, default 0
spg|integer|not null, default 0
bpg|integer|not null, default 0
ft%|integer|not null, default 0
fg%|integer|not null, default 0
height|integer|not null
weight|integer|not null
team_id|integer|not null, foreign_key

## teams

Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
name|string|not null

## schedule

Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
date|date|not null
home_id|integer|not null
away_id|integer|not null

## entry
Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
user_id|integer|not null, foreign_key
contest_id|integer|not null, foreign_key
