@ui
Feature: Click
  US: As a user, I should able to click

  @click
  Scenario: Verify that the user able to click the button
    Given  the user is on the page
    When the user clicks on the "Click" headline
    Then the window title contains "Click"
    And the user should see the following headlines
      | Scenario   |
      | Playground |
    And the button is displayed
    When the user clicks on the button
    Then the user should see the green button

