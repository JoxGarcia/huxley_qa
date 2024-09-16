class Login {
  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }
  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }
  submitLogin() {
    cy.get('button[type="submit"]').click();
  }
  wrongLoginText() {
    cy.get('div[role="alert"]').should(
      "have.text",
      "Incorrect username or password."
    );
  }

  login(obj) {
    this.enterUsername(obj.email);
    this.enterPassword(obj.password);
    this.submitLogin();
  }
}

export const login = new Login();
