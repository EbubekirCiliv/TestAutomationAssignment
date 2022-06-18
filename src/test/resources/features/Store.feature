@api
Feature: Store

  @store
  Scenario: Post request for Store Order

    Given the endpoint is "store/order"
    And the request body for post store order following
      | id | petId | quantity | shipDate                     | status | complete |
      | 6  | 2     | 1        | 2022-07-18T14:52:13.670+0000 | placed | true     |

    When I send POST request
    Then the status code is 200

    And the response body for post store order following
      | id | petId | status |
      | 6  | 2     | placed |