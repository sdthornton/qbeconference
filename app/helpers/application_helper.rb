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

  def fancy_image_tag(src, opts)
    options = { use_background: false }.merge(opts)

    min_src = src.gsub(/\.([^.]+)$/) {|match| ".min#{match}" }
    webp_src = src.gsub(/\.[^.]+$/, '.webp')

    div_class = "o-fancy-image #{options[:use_background] ? "u-absolute o-fancy-image--use-background" : "u-relative" } #{options[:class]}"

    wrapper_options = {
      class: div_class,
      style: options[:use_background] ? "" : "padding-bottom: #{options[:aspect]*100}%;",
      data: {
        src: image_path(src),
        webp_src: image_path(webp_src)
      }
    }.merge(options.except(:class, :use_background));

    content_tag(:div, wrapper_options) do
      if options[:use_background]
        content_tag(:div, "", class: "o-fancy-image__loader", style: "background-image: url('#{image_path(min_src)}');".html_safe) +
        content_tag(:noscript) do
          content_tag(:div, "", class: "o-fancy-image__image js-loaded", style: "background-image: url('#{image_path(src)}');".html_safe)
        end
      else
        image_tag(min_src, class: "o-fancy-image__loader") +
        content_tag(:noscript) do
          image_tag(src, class: "o-fancy-image__image js-loaded")
        end
      end
    end
  end
end
