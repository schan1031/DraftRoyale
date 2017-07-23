class Api::EntriesController < ApplicationController

  def show
    @entry = Entry.find(params[:id])
    render :show
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.user_id = curren_user.id
    if @entry.save
      render json: @entry
    end
  end

  def private
  end

  def entry_params
    params.require(:entry).permit(:contest_id,
      :p_one,
      :p_two,
      :p_three,
      :p_four,
      :p_five,
      :p_six,
      :p_seven,
      :p_eight
    )
  end

end
