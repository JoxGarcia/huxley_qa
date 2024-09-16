class Assertions {
  get = {
    inputForm: (input) =>
      cy.get("label").contains(input).parent().find("input"),
  };

  inPutValidation(inputName) {
    this.get.inputForm(inputName).then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Completa este campo" || "Please fill out this field."
      );
    });
  }

  html5Validation(inputName) {
    this.get.inputForm(inputName).then(($input) => {
      cy.contains("Invalid phone number").should("be.visible");
    });
  }
}

export const formAssertions = new Assertions();
