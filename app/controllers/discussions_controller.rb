class DiscussionsController < ApplicationController

  before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @discussions =
      Discussion
        .order(votes: :desc, created_at: :desc)
        .joins(:user)
        .select('*, users.name as user_name')
  end

  def show
    @discussion = Discussion.includes(:user).friendly.find(params[:id])
    @comments = Comment.where(discussion_id: @discussion.id).includes(:user).hash_tree(limit_depth: 6)

    if (user_signed_in?)
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
    discussion = Discussion.friendly.find(params[:discussion_id])
    # UsersDiscussionVote.where(user)
    @vote = UsersDiscussionVote.new(user: current_user, discussion: discussion, value: 1)

    respond_to do |format|
      format.json {
        if @vote.save
          render json: { "value": discussion.votes }
        else
          head :bad_request
        end
      }
    end
  end

  def downvote
  end

  def destroy
  end

private

  def discussion_params
    params.require(:discussion).permit(:title, :content)
  end

end
