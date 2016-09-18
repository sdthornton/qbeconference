class Discussion < ApplicationRecord
  extend FriendlyId
  friendly_id :slugify, use: :slugged

  belongs_to :user, required: true
  has_many :comments, dependent: :destroy
  has_many :users_discussion_votes, dependent: :destroy

  validates :title, :content, presence: true

  before_create do
    self.votes = 1
  end

  def slugify
    [:title]
  end

  def created_by
    try(:user_name) ? user_name : user.name
  end
end
