/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../support/POM/Login/login";

Given(
  "User not logged in and navigated to portal.staging.huxleymed.com",
  () => {
    cy.visit("/");
  }
);

When("user tries to login with email and password", (dataTable) => {
  const table = dataTable.hashes()[0];
  login.enterUsername(table.email);
  login.enterPassword(table.password);
  login.submitLogin();
});

Then("Login with physician login Successful, forwarded to dashboard", () => {
  cy.url().should("include", "/studies");
  cy.url().should("eq", "https://portal.development.huxleymed.com/studies");
});

Then(
  "Attempt login with email not registered to system will be unsuccessful",
  () => {
    login.wrongLoginText();
  }
);
