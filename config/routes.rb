Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update, :show, :index] do
      resources :photos, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :show, :update, :destroy]
    resources :likes, only: [:create, :destroy]


  end

  root "static_pages#root"
end
