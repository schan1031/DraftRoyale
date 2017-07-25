class Api::ContestsController < ApplicationController
  def index
    ids = []
    current_user.entered_contests.each do |contest|
      ids.push(contest.id)
    end
    if ids.length > 0
      @contests = Contest.where('id NOT IN (?)', ids)
    else
      @contests = Contest.all
    end
    render :index
  end

  def show
    @contest = Contest.find(params[:id])
    render :show
  end

  def create
    @contest = Contest.new(contest_params)
    @contest.creator_id = current_user.id
    if @contest.save
      render json: @contest
    else
      render json: @contest.errors.full_messages, status: 400
    end
  end

  def destroy
  end

  private

  def contest_params
    params.require(:contest).permit(:max_contestants,
      :point_value,
      :name,
      :contest_date)
  end

end
