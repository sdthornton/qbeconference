class UsersCommentVote < ApplicationRecord
  belongs_to :user, required: true
  belongs_to :comment, required: true

  validates_uniqueness_of :comment_id, scope: :user_id

  before_save do
    value = value > 0 ? 1 : -1 # ensure each comment gets only +1 or -1
    comment.update_attributes(votes: comment.votes + value) # comment.value can be considered an expanded counter_cache
  end
end
