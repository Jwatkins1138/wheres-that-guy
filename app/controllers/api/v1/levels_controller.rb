class Api::V1::LevelsController < ApplicationController

  before_action :set_level, only: [:show]

  def index
    @levels = Level.all 
    render json: @levels
  end

  def show
    if @level 
      render json: @level 
    else
      render json: @level.errors 
    end
  end

  private

  def set_level
    @level = Level.find(params[:id])
  end


end
