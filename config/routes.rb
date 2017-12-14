Rails.application.routes.draw do
  get 'users/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  get 'auth/:provider/callback', to: 'api/sessions#create'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
  end
end
