module DiscussionHelper

  def comments_tree_for(comments)
    comments.map do |comment, nested_comments|
      "<div id='#{comment.created_at.to_i}' class='o-comment'>" +
      render(comment) +
      (nested_comments.size > 0 ? content_tag(:div, comments_tree_for(nested_comments)) : "") +
      "</div>"
    end.join.html_safe
  end

end
