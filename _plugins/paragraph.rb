require "rubygems"
require "nokogiri"

module BlogHelper
  
  def paragraph(html)
    doc = Nokogiri::HTML::DocumentFragment.parse html
    doc.children.first.inner_html.html_safe
    return 'dddddddddddd'
  end 

end

