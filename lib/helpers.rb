module Helpers

  def local_path(path, options={})
    lang = options[:language] ? options[:language] : I18n.locale
    path = path.gsub("#{I18n.locale}/", '')
    if lang == root_locale
      "/#{path}"
    else
      "/#{lang}/#{path}"
    end
  end

end
