class LanguageClassesController < ApplicationController
  before_action :set_language_class, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /language_classes
  # GET /language_classes.json
  def index
    @language_classes = LanguageClass.all
  end

  # GET /language_classes/1
  # GET /language_classes/1.json
  def show
  end

  # GET /language_classes/new
  def new
    @language_class = LanguageClass.new
  end

  # GET /language_classes/1/edit
  def edit
  end

  # POST /language_classes
  # POST /language_classes.json
  def create
    @language_class = LanguageClass.new(language_class_params)

    respond_to do |format|
      if @language_class.save
        format.html { redirect_to @language_class, notice: 'Language class was successfully created.' }
        format.json { render :show, status: :created, location: @language_class }
      else
        format.html { render :new }
        format.json { render json: @language_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /language_classes/1
  # PATCH/PUT /language_classes/1.json
  def update
    respond_to do |format|
      if @language_class.update(language_class_params)
        format.html { redirect_to @language_class, notice: 'Language class was successfully updated.' }
        format.json { render :show, status: :ok, location: @language_class }
      else
        format.html { render :edit }
        format.json { render json: @language_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /language_classes/1
  # DELETE /language_classes/1.json
  def destroy
    @language_class.destroy
    respond_to do |format|
      format.html { redirect_to language_classes_url, notice: 'Language class was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_language_class
      @language_class = LanguageClass.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def language_class_params
      params.require(:language_class).permit(:name, :twelve_month_price, :do_creds, :pa_creds, :cne_creds)
    end
end
