Feature: Login Functionality

  Scenario: Login with Locked creds
    Given I am on app login Page
    When I login with "alice@example.com" and "10203040"
    Then I see locked error message

  Scenario: Login with No_Match creds
    Given I am on app login Page
    When I login with "1@2.com" and "f-o-o"
    Then I see do not match error message

   Scenario: Login with No_Usename invalid creds
    Given I am on app login Page
    When I login with "" and ""
    Then I see username required error message

 Scenario: Login with No_Password creds
    Given I am on app login Page
    When I login with "bob@example.com" and ""
    Then I see password required error message

  Scenario: Login with valid creds
      Given I am on app login Page
      When I login with "bob@example.com" and "10203040"
      Then I see products page
