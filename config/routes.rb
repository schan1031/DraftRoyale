Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :contests, only: [:index, :create, :show, :delete]
    resources :players, only: [:index, :show]
    resources :schedule, only: [:index, :show]
    resources :entries, only: [:create, :show, :index]
  end
end
