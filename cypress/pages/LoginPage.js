class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('input[value="Log In"]'),
    registerLink: () => cy.contains('Register'),
    errorMessage: () => cy.get('.error')
  };

  visit() {
    cy.visit('/index.htm');
  }

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }

  clickRegister() {
    this.elements.registerLink().click();
  }
}

export default new LoginPage();
