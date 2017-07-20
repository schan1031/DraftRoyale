# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170720205500) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contests", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.integer "max_contestants", null: false
    t.integer "point_value", null: false
    t.string "name", null: false
    t.boolean "status", default: false, null: false
    t.date "contest_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_contests_on_creator_id"
  end

  create_table "entries", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "contest_id", null: false
    t.integer "p_one", null: false
    t.integer "p_two", null: false
    t.integer "p_three", null: false
    t.integer "p_four", null: false
    t.integer "p_five", null: false
    t.integer "p_six", null: false
    t.integer "p_seven", null: false
    t.integer "p_eight", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contest_id"], name: "index_entries_on_contest_id"
    t.index ["user_id"], name: "index_entries_on_user_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name", null: false
    t.string "position", null: false
    t.float "ppg", default: 0.0, null: false
    t.float "apg", default: 0.0, null: false
    t.float "rpg", default: 0.0, null: false
    t.float "spg", default: 0.0, null: false
    t.float "bpg", default: 0.0, null: false
    t.float "ft", default: 0.0, null: false
    t.float "fg", default: 0.0, null: false
    t.integer "height", default: 0, null: false
    t.integer "weight", default: 0, null: false
    t.integer "team_id", null: false
    t.string "image_url"
    t.string "bio", default: "No Information"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.date "date", null: false
    t.integer "home_id", null: false
    t.integer "away_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["away_id"], name: "index_schedules_on_away_id"
    t.index ["home_id"], name: "index_schedules_on_home_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "dr_points", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
