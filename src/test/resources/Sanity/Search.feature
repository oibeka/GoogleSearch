@Smoke

Feature: Sanity Tests

  Scenario: Request a claim through google search
    Given user is on the home page
    When user inputs INTURN keyword in the search field
    And clicks inturn link
    Then cliks request a demo button INTURN website
    Then user should be able to see Request a Demo Page