# API Endpoints
---
## HTML API

| Label | Method | URL | Return |
|-------|--------|-----|--------|
|Root   | 'GET'  |'/'  | Loads React App|

## JSON API

|Controller|Method|URL|Notes|
|-|-|-|-|
|Users|'POST'|'/api/users'|Create User|
|Users|'PATCH'|'/api/users/:id'|Update User|
|Users|'DELETE'|'/api/users/:id'|Destroy User|
| | | | |
|Session|'POST'|'/api/session'|Log In|
|Session|'DELETE'|'/api/session'|Log Out|
| | | | |
|Players|'GET'|'/api/players'|Get Players|
|Players|'GET'|'/api/players/:id'|Get Player|
| | | | |
|Contests|'GET'|'/api/contests'|Get Contests|
|Contests|'POST'|'/api/contests'|Create Contest|
|Contests|'DELETE'|'/api/contest/:id'|Destroy Contest|
| | | | |
|Teams|'GET'|'/api/teams'|Get Teams by Schedule/Filter|
| | | | |
|Schedule|'GET'|'/api/schedule'|Get Schedule for Contest|
| | | | |
|Entries|'GET'|'/api/users/:id/entries'|Get Entries by User|
|Entries|'DELETE'|'/api/users/:id/entries/:id'|Delete Entry|
