Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'me#home'
  get '/gallery', to: 'me#gallery'
  get '/beforeafter', to: 'me#beforeafter'
end
