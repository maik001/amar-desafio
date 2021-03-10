class ApplicationController < ActionController::Base
    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    include SessionsHelper
    def authorize
        unless logged_in?
          redirect_to root_url
        end
     end
    def correct_user?
      @user = User.find(params[:id])
      unless current_user == @user
          redirect_to users_path
      end
    end
end
