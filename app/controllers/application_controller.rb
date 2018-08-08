class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
  end

  def logged_in?
  end

  def login(user)
  end
end
