require 'test_helper'

class LanguageClassesControllerTest < ActionController::TestCase
  setup do
    @language_class = language_classes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:language_classes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create language_class" do
    assert_difference('LanguageClass.count') do
      post :create, language_class: { twelve_month_price: @language_class.twelve_month_price, cne_creds: @language_class.cne_creds, do_creds: @language_class.do_creds, name: @language_class.name, pa_creds: @language_class.pa_creds }
    end

    assert_redirected_to language_class_path(assigns(:language_class))
  end

  test "should show language_class" do
    get :show, id: @language_class
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @language_class
    assert_response :success
  end

  test "should update language_class" do
    patch :update, id: @language_class, language_class: { twelve_month_price: @language_class.twelve_month_price, cne_creds: @language_class.cne_creds, do_creds: @language_class.do_creds, name: @language_class.name, pa_creds: @language_class.pa_creds }
    assert_redirected_to language_class_path(assigns(:language_class))
  end

  test "should destroy language_class" do
    assert_difference('LanguageClass.count', -1) do
      delete :destroy, id: @language_class
    end

    assert_redirected_to language_classes_path
  end
end
