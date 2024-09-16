Feature: User login

  Scenario: Successful login
    Given User not logged in and navigated to portal.staging.huxleymed.com
    When user tries to login with email and password
      | email                   | password      |
      | jpgarciap1997@gmail.com | Palacios1997! |
    Then Login with physician login Successful, forwarded to dashboard

  Scenario: Unsuccessful login
    Given User not logged in and navigated to portal.staging.huxleymed.com
    When user tries to login with email and password
      | email                    | password      |
      | jpgarciap21997@gmail.com | Palacios1997! |
    Then Attempt login with email not registered to system will be unsuccessful