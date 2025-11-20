class AccountsPage {
  elements = {
    accountsOverview: () => cy.get('#accountTable'),
    accountLink: () => cy.get('#accountTable a').first(),
    balance: () => cy.get('#accountTable .balance'),
    welcomeMessage: () => cy.get('.smallText'),
    logoutLink: () => cy.contains('Log Out')
  };

  verifyAccountsVisible() {
    this.elements.accountsOverview().should('be.visible');
  }

  getFirstAccountBalance() {
    return this.elements.balance().first();
  }

  clickFirstAccount() {
    this.elements.accountLink().click();
  }

  logout() {
    this.elements.logoutLink().click();
  }
}

export default new AccountsPage();
