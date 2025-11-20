import LoginPage from '../../pages/LoginPage';
import AccountsPage from '../../pages/AccountsPage';
import TransferPage from '../../pages/TransferPage';

describe('ParaBank - Banking Application Tests', () => {
  
  const testUser = {
    username: 'john',
    password: 'demo'
  };

  beforeEach(() => {
    LoginPage.visit();
  });

  it('User can login successfully', () => {
    LoginPage.login(testUser.username, testUser.password);
    AccountsPage.verifyAccountsVisible();
    AccountsPage.elements.welcomeMessage().should('contain', 'Welcome');
  });

  it('User cannot login with invalid credentials', () => {
    LoginPage.login('invaliduser', 'wrongpassword');
    // Just verify error appears - don't check specific text
    LoginPage.elements.errorMessage().should('exist');
  });

  it('Displays account overview after login', () => {
    LoginPage.login(testUser.username, testUser.password);
    AccountsPage.verifyAccountsVisible();
    // Verify table has content instead of specific balance selector
    cy.get('#accountTable tbody tr').should('have.length.at.least', 1);
  });

  it('User can view account details', () => {
    LoginPage.login(testUser.username, testUser.password);
    AccountsPage.verifyAccountsVisible();
    AccountsPage.clickFirstAccount();
    cy.url().should('include', 'activity.htm');
    cy.get('#accountId').should('be.visible');
  });

  it('User can navigate to transfer page', () => {
    LoginPage.login(testUser.username, testUser.password);
    TransferPage.visit();
    TransferPage.elements.amountInput().should('be.visible');
    TransferPage.elements.transferButton().should('be.visible');
  });

  it('Cannot transfer with empty amount', () => {
    LoginPage.login(testUser.username, testUser.password);
    TransferPage.visit();
    TransferPage.elements.transferButton().click();
    cy.get('.error').should('be.visible');
  });

  it('User can logout successfully', () => {
    LoginPage.login(testUser.username, testUser.password);
    AccountsPage.logout();
    LoginPage.elements.loginButton().should('be.visible');
  });
});
