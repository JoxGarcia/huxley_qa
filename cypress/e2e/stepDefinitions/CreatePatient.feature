Feature: Patient Managment

  Scenario: Users shall be able to create patients in the system.
    Given Given user is logged in as a physician
      | email                   | password      |
      | jpgarciap1997@gmail.com | Palacios1997! |
    When The user goes to add a patient through new study
    Then user add a new patient successfully
      | firstName | lastName |  | phoneNumber | email       | mrn     | race  | sex  | phycNumber |
      | Test      | QA       |  | 2235898789  | test@qa.com | 5456456 | White | Male | 2235898789 |

  Scenario: Patient required information shall include first name, last name, primary phone number, address, date of birth, race and sex.
    Given Given user is logged in as a physician
      | email                   | password      |
      | jpgarciap1997@gmail.com | Palacios1997! |
    When The user goes to add a patient through new study
    Then See that required fields are marked as required and user may not move to next step without filling
      | firstName | lastName |  | phoneNumber | email        | mrn     | race  | sex  | phycNumber |
      | Test2     | QA2      |  | 2235898789  | test2@qa.com | 5456456 | White | Male | 2235898789 |
