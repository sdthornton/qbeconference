class Comment < ApplicationRecord
  belongs_to :discussion, counter_cache: true
  belongs_to :user, required: true
  has_many :users_comment_votes, dependent: :destroy

  acts_as_tree order: 'votes DESC, created_at DESC'

  before_create do
    self.votes = 1
  end
end
