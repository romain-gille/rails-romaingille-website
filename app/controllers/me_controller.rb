require 'json'

class MeController < ApplicationController
  def home
    filepath = 'lib/assets/me.json'
    serialized_me = File.read(filepath)
    @me = JSON.parse(serialized_me)
  end

  def gallery
    filepath = 'lib/assets/images-gallery.json'
    serialized_me = File.read(filepath)
    @gallery1 = JSON.parse(serialized_me)
    filepath = 'lib/assets/images-gallery-2.json'
    serialized_me = File.read(filepath)
    @gallery2 = JSON.parse(serialized_me)
  end
end
