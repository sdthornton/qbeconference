Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks", registrations: "users/registrations" }
  devise_scope :user do
    get "/login" => "devise/sessions#new"
    get "/register" => "devise/registrations#new"
    delete "/logout" => "devise/sessions#destroy"
  end

  resources :discussions, except: [:edit, :update] do
    resources :comments, only: [:create, :destroy]
    post "upvote" => "discussions#upvote", as: "upvote"
    post "downvote" => "discussions#downvote", as: "downvote"
  end

  get "/press-and-papers" => "press_and_papers#index"

  get "/contact" => "contact#index"

end
