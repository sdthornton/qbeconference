class CommentsController < ApplicationController

  before_action :authenticate_user!

  def create
    discussion = Discussion.friendly.find(params[:discussion_id])

    if params[:comment][:parent_id].to_i > 0
      parent = Comment.find(params[:comment].delete(:parent_id))
      @comment = parent.children.build(comment_params)
    else
      @comment = Comment.new(comment_params)
    end

    @comment.discussion = discussion
    @comment.user = current_user

    if @comment.save
      flash[:success] = "Added your comment"
    else
      flash[:error] = "Something went wrong"
    end

    redirect_to discussion_path(discussion, anchor: @comment.created_at.to_i)
  end

  def destroy
    @comment = Comment.find(params[:id])

    if current_user = @comment.user
      @comment.destroy
      redirect_to discussion_path(params[:discussion_id])
    else
      redirect_to discussion_path(params[:discussion_id]), status: :unauthorized
    end
  end

private

  def comment_params
    params.require(:comment).permit(:content, :parent_id)
  end

end
