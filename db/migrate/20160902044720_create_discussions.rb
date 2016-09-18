class CreateDiscussions < ActiveRecord::Migration[5.0]
  def change
    create_table :discussions do |t|

      t.string :title, null: false
      t.text :content, null: false
      t.integer :votes, null: false, default: 0, limit: 1

      t.timestamps
    end
  end
end
