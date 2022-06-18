@ui
Feature: Sample App
  US: As a user, I should able to login
  @login
  Scenario: Verify that the user able to login
    Given  the user is on the page
    When the user clicks on the "Sample App" headline
    Then the window title contains "Sample App"
    When the user enters the following credentials
    |username|User Name|
    |password|pwd      |
    And the user clicks on the login button
    Then the user should see "Welcome" as a success notification
