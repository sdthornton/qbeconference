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

ActiveRecord::Schema.define(version: 20160918021414) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comment_hierarchies", id: false, force: :cascade do |t|
    t.integer "ancestor_id",   null: false
    t.integer "descendant_id", null: false
    t.integer "generations",   null: false
    t.index ["ancestor_id", "descendant_id", "generations"], name: "comment_anc_desc_udx", unique: true, using: :btree
    t.index ["descendant_id"], name: "comment_desc_udx", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "content",                             null: false
    t.integer  "votes",         limit: 2, default: 0, null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "user_id"
    t.integer  "discussion_id"
    t.integer  "parent_id"
    t.index ["discussion_id"], name: "index_comments_on_discussion_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "discussions", force: :cascade do |t|
    t.string   "title",                                null: false
    t.text     "content",                              null: false
    t.integer  "votes",          limit: 2, default: 0, null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.integer  "user_id"
    t.string   "slug"
    t.integer  "comments_count",           default: 0, null: false
    t.index ["slug"], name: "index_discussions_on_slug", unique: true, using: :btree
    t.index ["user_id"], name: "index_discussions_on_user_id", using: :btree
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string   "slug",                      null: false
    t.integer  "sluggable_id",              null: false
    t.string   "sluggable_type", limit: 50
    t.string   "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true, using: :btree
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type", using: :btree
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id", using: :btree
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "provider"
    t.string   "uid"
    t.integer  "failed_attempts"
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true, using: :btree
  end

  create_table "users_comment_votes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "comment_id"
    t.integer "value",      default: 1, null: false
    t.index ["comment_id"], name: "index_users_comment_votes_on_comment_id", using: :btree
    t.index ["user_id"], name: "index_users_comment_votes_on_user_id", using: :btree
  end

  create_table "users_discussion_votes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "discussion_id"
    t.integer "value",         default: 1, null: false
    t.index ["discussion_id"], name: "index_users_discussion_votes_on_discussion_id", using: :btree
    t.index ["user_id"], name: "index_users_discussion_votes_on_user_id", using: :btree
  end

  add_foreign_key "comments", "discussions"
  add_foreign_key "comments", "users"
  add_foreign_key "discussions", "users"
end
