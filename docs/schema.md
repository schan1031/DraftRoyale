# Database Schema

**Notes:**
- The users and contests table form the whole of what is being written into the database, with the entry table being the join table forming many to many relationships.
- The players, teams, and schedule tables are information tables, used to run the contests, and create the draft of players. These tables are read-only in the app, and will be updated outside the app.

## users

Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
username|string|not null, unique
email|string|not null, unique
password_digest|string|not null
account_points|integer|not null, default 0

## contests

Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
creator_id|integer|not null, foreign_key
max_contestants|integer|not null
point_value|integer|not null
name|string|not null
status|boolean|not null, default false

## entry
Column Name|Data Type|Details
-|-|-
id|integer|not null, primary key
user_id|integer|not null, foreign_key
contest_id|integer|not null, foreign_key


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
