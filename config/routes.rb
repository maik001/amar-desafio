Rails.application.routes.draw do
  get 'desafios/index'
  get 'home/index'
  resources :users
  get    'login'   => 'sessions#new'
  get    'home'    =>  'home#index'
  get    'desafios'    =>  'desafios#index'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  root 'sessions#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
