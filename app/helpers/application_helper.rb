require 'redcarpet'

module ApplicationHelper
  class MarkdownRender < Redcarpet::Render::HTML
    def block_code(code, language)
      code
    end

    def header(text, header_level)
      text
    end

    def hrule
      nil
    end

    def codespan(code)
      code
    end

    def raw_html(raw_html)
      raw_html
    end
  end

  def markdown(text)
    options = {
      filter_html: true,
      hard_wrap: true,
      link_attributes: { rel: 'nofollow', target: '_blank' }
    }

    extensions = {
      autolink: true,
      strikethrough: true,
      superscript: true,
      underline: true,
      highlight: true
    }

    renderer = MarkdownRender.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    markdown.render(text).html_safe
  end
end
