require 'json'

class MeController < ApplicationController
  def home
    filepath = 'lib/assets/me.json'
    serialized_me = File.read(filepath)
    @me = JSON.parse(serialized_me)
  end
end
