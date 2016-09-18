class UsersDiscussionVote < ApplicationRecord
  belongs_to :user, required: true
  belongs_to :discussion, required: true

  validates_uniqueness_of :discussion_id, scope: :user_id

  before_save do
    discussion.update_attributes(votes: discussion.votes + self.value) # discussion.value can be considered an expanded counter_cache
  end
end
