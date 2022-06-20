@api
Feature: Pet

  @pet
  Scenario: Get request for pet endpoint

    Given the endpoint is "pet/1"
    When I send GET Request
    Then the status code is 200
    And the response body is the following
      | id | name                        | status    |
      | 1  | good boy (don't delete pls) | available |