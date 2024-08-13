Feature: Login Functionality

  Scenario Outline: Login invalid creds
    Given I am on app login Page
    When I login with <username> and <password>
    Then I should see <outcome> for <user>
    Examples:
      | username          | password | outcome                                                     | user            |
      | alice@example.com | 10203040 | Sorry, this user has been locked out.                       | LOCKED          |
      | 1@2.com           | f-o-o    | Provided credentials do not match any user in this service. | NO_MATCH        |
      |                   |          | Username is required                                        | NO_USERNAME     |
      | bob@example.com   |          | Password is required                                        | NO_PASSWORD     |
  
  Scenario: Login valid creds
      Given I am on app login Page
      When I login with bob@example.com and 10203040
      Then I see Product page