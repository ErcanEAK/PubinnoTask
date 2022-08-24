Feature: Factoriel

  Scenario:Verify to any digit factoriel
    Given user is on the main page
    When user should write "8" on the number area
    And user should click  the Calculate button
    Then user should see factoriel of "The factorial of 8 is: 40320"