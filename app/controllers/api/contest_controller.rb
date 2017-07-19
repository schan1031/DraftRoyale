class Api::ContestController < ApplicationController
  def index
  end

  def show
  end

  def create

  end

  def destroy
  end

  private

  def contest_params
    params.require(:contest).permit(:max_contestants,
      :point_value,
      :name)
  end

end
