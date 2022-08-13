Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get 'levels/index'
    end
  end
  
  resources :levels
  
  root "levels#index"
end
