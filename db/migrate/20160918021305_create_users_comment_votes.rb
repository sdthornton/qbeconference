class CreateUsersCommentVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :users_comment_votes do |t|
      t.references :user, index: true
      t.references :comment, index: true
      t.integer :value, null: false, default: 1
    end
  end
end
