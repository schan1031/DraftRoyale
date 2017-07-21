class Api::PlayersController < ApplicationController
  def index
    ids = player_params[:team_ids]
    @players = Player.where(team_id: ids)
    render :index
  end

  def show
    @player = Player.find(params[:id])
    render :show
  end

  private

  def player_params
    params.require(:player).permit(team_ids: [])
  end
end
