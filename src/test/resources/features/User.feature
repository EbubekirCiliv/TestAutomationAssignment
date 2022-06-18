@api
Feature: User

  @user
  Scenario: Post request for user

    Given the endpoint is "user"
    And the request body for post user following
      | id | username | firstName | lastName | email       | password | phone   | userStatus |
      | 30 | ms       | Mike      | Sun      | ms@mail.com | 123      | 1234567 | 30         |

    When I send POST request
    Then the status code is 200
    And the response body of user post request following
      | code | type    | message |
      | 200  | unknown | 30      |