class TransferPage {
  elements = {
    amountInput: () => cy.get('#amount'),
    fromAccountSelect: () => cy.get('#fromAccountId'),
    toAccountSelect: () => cy.get('#toAccountId'),
    transferButton: () => cy.get('input[value="Transfer"]'),
    successMessage: () => cy.get('#showResult h1'),
    transferDetails: () => cy.get('#showResult p')
  };

  visit() {
    cy.visit('/transfer.htm');
  }

  transferFunds(amount, fromAccount, toAccount) {
    this.elements.amountInput().type(amount);
    if (fromAccount) {
      this.elements.fromAccountSelect().select(fromAccount);
    }
    if (toAccount) {
      this.elements.toAccountSelect().select(toAccount);
    }
    this.elements.transferButton().click();
  }

  verifyTransferSuccess() {
    this.elements.successMessage().should('contain', 'Transfer Complete');
  }
}

export default new TransferPage();
