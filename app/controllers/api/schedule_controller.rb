class Api::ScheduleController < ApplicationController

  def index
    @schedules = Schedule.where(date: schedule_params[:date])
    render :index
  end

  private
  def schedule_params
    params.require(:schedule).permit(:date)
  end
end

# $.ajax({method: 'GET', url: '/api/schedule', data: { schedule: { date: new Date(2017, 6, 25) }}})
