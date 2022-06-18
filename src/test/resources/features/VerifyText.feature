@ui
Feature:Verify Text
  US: As a user, I should able to find text

  @verifyText
  Scenario: Verify that the user able to find an element by displayed text has nuances
    Given  the user is on the page
    When the user clicks on the "Verify Text" headline
    Then the window title contains "Verify Text"
    And the user should see the all "Welcome" text in the page

