class Discussion < ApplicationRecord
  extend FriendlyId
  friendly_id :slugify, use: :slugged

  belongs_to :user, required: true
  has_many :comments, dependent: :destroy
  has_many :users_discussion_votes, dependent: :destroy

  validates :title, :content, presence: true

  before_save do
    self.created_by = user.name
  end

  after_create do
    UsersDiscussionVote.create(user: user, discussion: self, value: 1)
  end

  def slugify
    [:title]
  end
end
