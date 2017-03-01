require "lib/helpers"
helpers Helpers

# Change Compass configuration
compass_config do |config|
  config.add_import_path "bower_components/foundation-sites/scss/"
  config.output_style = :compact

  # Set this to the root of your project when deployed:
  config.http_path = "/"
  config.css_dir = "stylesheets"
  config.sass_dir = "stylesheets"
  config.images_dir = "images"
  config.javascripts_dir = "javascripts"
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'
set :root_locale, :ca

activate :autoprefixer
activate :livereload
activate :i18n, mount_at_root: root_locale

configure :development do
  set :environment, 'development'
end

activate :directory_indexes
configure :build do
  ignore 'shapes/*'
  set :environment, 'production'
end

page '/404.html', :directory_index => false


after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

# Use the correct vendor prefixes for foundation
activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
end

ignore "bower_components/*"

helpers do
  def icon(name, options = {})
    size = ''
    size += " width=\"#{options[:width]}\"" if options[:width]
    size += " height=\"#{options[:height]}\"" if options[:height]

    aria_label = "aria-label=\"#{options[:aria_label]}\"" if options[:aria_label]
    aria_hidden = "aria-hidden=\"true\"" if options[:aria_hidden]

    role = "role=\"#{options[:role]}\"" if options[:role]

    iconClass = "icon"
    iconClass = "" if options[:removeIconClass]

    "<svg class=\"#{iconClass} icon--#{name} #{options[:class]}\"#{size} #{role} #{aria_label} #{aria_hidden}> <use xlink:href=\"#{asset_url '/images/icons.svg'}#icon-#{name}\" /> </svg>"
  end
end

configure :build do
  ignore 'shapes/*'
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  activate :unpublished_pages
  activate :asset_hash
  set :environment, 'production'
end

activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.host   = ''
  deploy.path   = ''
  deploy.user  = 'deploy'
  deploy.flags = '-avzp --chmod=+r'
end
