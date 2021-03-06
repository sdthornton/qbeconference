class DiscussionsController < ApplicationController

  before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:index, :show, :destroy]

  def index
    if user_signed_in?
      @discussions =
        Discussion
          .joins("LEFT JOIN users_discussion_votes
                  ON discussions.id = users_discussion_votes.discussion_id
                  AND users_discussion_votes.user_id = #{current_user.id}")
          .select(discussions_with_user_vote_selection)
    else
      @discussions = Discussion.all
    end

    if params[:sort] == 'new'
      @discussions = @discussions.order(created_at: :desc)
    elsif params[:sort] == 'old'
      @discussions = @discussions.order(created_at: :asc)
    else
      @discussions = @discussions.order(votes: :desc, created_at: :desc)
    end
  end

  def show
    if user_signed_in?
      @discussion =
        Discussion
          .joins("LEFT JOIN users_discussion_votes
                  ON discussions.id = users_discussion_votes.discussion_id
                  AND users_discussion_votes.user_id = #{current_user.id}")
          .select(discussions_with_user_vote_selection)
          .friendly.find(params[:id])

      @new_comment = Comment.new
    else
      @discussion = Discussion.friendly.find(params[:id])
    end

    @comments = @discussion.comments.hash_tree(limit_depth: 6)
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

  def destroy
    @discussion = Discussion.friendly.find(params[:id])

    if current_user == @discussion.user
      @discussion.destroy
      redirect_to discussions_path
    else
      redirect_to discussions_path, status: :unauthorized
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
