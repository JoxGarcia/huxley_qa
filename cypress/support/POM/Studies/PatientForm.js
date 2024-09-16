class PatientForm {
  get = {
    inputForm: (input) =>
      cy.get("label").contains(input).parent().find("input"),
    dropDown: (label, value) => {
      cy.get("label").contains(label).parent().find("button").click();
      cy.get('ul[data-popper-placement="bottom"]').within(() => {
        cy.get('li[role="option"]').contains(value).click();
      });
    },
    submitButton: () => cy.get('button[type="submit"]'), // Botón para enviar el formulario
  };

  clickAddNewStuddyButton() {
    cy.get('[data-testid="AddIcon"]').click();
  }

  enterFirstName(firstName) {
    this.get.inputForm("First Name").type(firstName);
  }

  enterLastName(lastName) {
    this.get.inputForm("Last Name").type(lastName);
  }

  enterPhoneNumber(phoneNumber) {
    this.get.inputForm("Phone Number").type(phoneNumber);
  }

  enterEmail(email) {
    this.get.inputForm("Email Address").type(email);
  }

  enterMRN(mrn) {
    this.get.inputForm("MRN").type(mrn);
  }

  /**
   * Races can be
   * Asian - American Indian or Alaska Native - Black or African American - Native Hawaiian or Pacific Islander - White
   * @param {*} race
   */
  selectRace(race) {
    this.get.dropDown("Race", race);
  }

  /**
   * Sex value can be
   * Male - Female
   * @param {*} sex
   */
  selectSex(sex) {
    this.get.dropDown("Sex", sex);
  }

  enterPhysicianPhone(phoneNumber) {
    this.get.inputForm("Referring Physician Phone Number").type(phoneNumber);
  }

  clickSubmit() {
    this.get.submitButton().click();
  }

  createNewStudyWithNewPatient(obj) {
    let {
      firstName,
      lastName,
      phoneNumber,
      email,
      mrn,
      race,
      sex,
      phycNumber,
    } = obj;
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterPhoneNumber(phoneNumber);
    this.enterEmail(email);
    this.enterMRN(mrn);
    this.selectRace(race);
    this.selectSex(sex);
    this.enterPhysicianPhone(phycNumber);
    this.clickSubmit();
  }
}

export const patientForm = new PatientForm();
