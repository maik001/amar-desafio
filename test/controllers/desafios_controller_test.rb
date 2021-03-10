require "test_helper"

class DesafiosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get desafios_index_url
    assert_response :success
  end
end
