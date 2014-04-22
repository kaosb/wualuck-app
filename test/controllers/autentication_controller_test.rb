require 'test_helper'

class AutenticationControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
