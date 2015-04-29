class TasksController < ApplicationController
  before_action :set_task, only: [:destroy]

  # GET /tasks.json
  def index
    @tasks = Task.all
  end

  # POST /tasks.json
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task.attributes
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task.destroy
    respond_to do |format|
      format.html { redirect_to tasks_url, notice: 'Task was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.require(:task).permit(:title, :done)
    end
end
