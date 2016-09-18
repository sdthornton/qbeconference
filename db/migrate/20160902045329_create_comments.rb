class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|

      t.text :content, null: false
      t.integer :votes, null: false, default: 0, limit: 1

      t.timestamps
    end
  end
end
