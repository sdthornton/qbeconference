class DiscussionsController < ApplicationController

  before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    if user_signed_in?
      @discussions =
        Discussion
          .order(votes: :desc, created_at: :desc)
          .joins("LEFT JOIN users_discussion_votes
                  ON discussions.id = users_discussion_votes.discussion_id
                  AND users_discussion_votes.user_id = #{current_user.id}")
          .select(discussions_with_user_vote_selection)
    else
      @discussions = Discussion.order(votes: :desc, created_at: :desc)
    end
  end

  def show
    if user_signed_in?
      @discussion =
        Discussion
          .includes(:comments)
          .joins("LEFT JOIN users_discussion_votes
                  ON discussions.id = users_discussion_votes.discussion_id
                  AND users_discussion_votes.user_id = #{current_user.id}")
          .select(discussions_with_user_vote_selection)
          .friendly.find(params[:id])
    else
      @discussion = Discussion.friendly.find(params[:id])
    end

    @comments = @discussion.comments.hash_tree(limit_depth: 6)

    if user_signed_in?
      @new_comment = Comment.new
    end
  end

  def new
    @discussion = Discussion.new
  end

  def create
    @discussion = Discussion.new(discussion_params)
    @discussion.user = current_user

    if @discussion.save
      flash[:success] = "Discussion topic added successfully"
      redirect_to discussions_path
    else
      flash[:error] = "Something went wrong"
      render :new
    end
  end

  def upvote
    @discussion = Discussion.friendly.find(params[:discussion_id])
    user_vote = @discussion.users_discussion_votes.where(user_id: current_user.id)

    if user_vote.present?
      if (@vote = user_vote.first).value == -1
        @vote.value = 1
        @discussion.update_attributes(votes: @discussion.votes + 1) # Remove current_user downvote
      end
    else
      @vote = UsersDiscussionVote.new(user: current_user, discussion: @discussion, value: 1)
    end

    respond_to do |format|
      format.json {
        if @vote.changed? && @vote.save
          render json: { "value": @discussion.votes }
        else
          head :bad_request
        end
      }
    end
  end

  def downvote
    @discussion = Discussion.friendly.find(params[:discussion_id])
    user_vote = @discussion.users_discussion_votes.where(user_id: current_user.id)

    if user_vote.present?
      if (@vote = user_vote.first).value == 1
        @vote.value = -1
        @discussion.update_attributes(votes: @discussion.votes - 1) # Remove current_user downvote
      end
    else
      @vote = UsersDiscussionVote.new(user: current_user, discussion: @discussion, value: -1)
    end

    respond_to do |format|
      format.json {
        if @vote.changed? && @vote.save
          render json: { "value": @discussion.votes }
        else
          head :bad_request
        end
      }
    end
  end

  def destroy
  end

private

  def discussion_params
    params.require(:discussion).permit(:title, :content)
  end

  def discussions_with_user_vote_selection
    'discussions.id,
     discussions.title,
     discussions.content,
     discussions.votes,
     discussions.created_by,
     discussions.created_at,
     discussions.updated_at,
     discussions.user_id,
     discussions.slug,
     discussions.comments_count,
     users_discussion_votes.value as current_user_vote'
  end

end
