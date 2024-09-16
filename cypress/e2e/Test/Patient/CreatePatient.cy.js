import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../support/POM/Login/login";
import { patientForm } from "../../../support/POM/Studies/PatientForm";
import { formAssertions } from "../../../support/POM/Studies/Assertions";
Given("Given user is logged in as a physician", (dataTable) => {
  const obj = dataTable.hashes()[0];
  cy.visit("/");
  login.login(obj);
});

When("The user goes to add a patient through new study", (dataTable) => {
  patientForm.clickAddNewStuddyButton();
});

Then("user add a new patient successfully", (dataTable) => {
  const obj = dataTable.hashes()[0];
  patientForm.createNewStudyWithNewPatient(obj);
  cy.contains("Patient created successfully").should("be.visible");
});

Then(
  "See that required fields are marked as required and user may not move to next step without filling",
  (dataTable) => {
    const obj = dataTable.hashes()[0];
    patientForm.clickSubmit();
    formAssertions.inPutValidation("First Name");
    patientForm.enterFirstName(obj.firstName);
    patientForm.clickSubmit();
    formAssertions.inPutValidation("Last Name");
    patientForm.enterLastName(obj.lastName);
    formAssertions.inPutValidation("Phone Number");
    patientForm.enterPhoneNumber(obj.phoneNumber);
    patientForm.clickSubmit();
    formAssertions.inPutValidation("Email Address");
    patientForm.enterEmail(obj.email);
    patientForm.clickSubmit();
    formAssertions.inPutValidation("MRN");
    patientForm.enterMRN(obj.firstName);
    patientForm.clickSubmit();
    formAssertions.inPutValidation("Race");
    patientForm.selectRace(obj.race);
    patientForm.clickSubmit();
    formAssertions.inPutValidation("Sex");
    patientForm.selectSex(obj.sex);
    patientForm.clickSubmit();
    formAssertions.html5Validation("Referring Physician Phone Number");
    patientForm.enterPhysicianPhone(obj.phycNumber);
    patientForm.clickSubmit();
    cy.contains("Patient created successfully").should("be.visible");
  }
);
