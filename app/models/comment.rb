class Comment < ApplicationRecord
  belongs_to :discussion, counter_cache: true
  belongs_to :user, required: true
  has_many :users_comment_votes, dependent: :destroy

  # acts_as_tree order: 'votes DESC, created_at DESC'
  acts_as_tree order: 'created_at ASC'

  before_save do
    self.created_by = user.name
  end
end
