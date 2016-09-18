class AddCommentsCounterToDiscussions < ActiveRecord::Migration[5.0]
  def change
    add_column :discussions, :comments_count, :integer, null: false, default: 0
  end
end
