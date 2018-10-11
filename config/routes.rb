Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :create, :show, :update, :destroy]
    get '/feed/:page', to: 'photos#feed'
    get '/userpics/:id', to: 'photos#by_user'
  end

  root "static_pages#root"
end
