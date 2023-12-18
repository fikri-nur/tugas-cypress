describe('Fitur Login', () => {
  it('User bisa login dengan username dan password yang valid', () => {
    // arrange
    cy.visit('https://automationexercise.com')
    /* ==== Generated with Cypress Studio ==== */

    // act
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > h2').should('have.text', 'Login to your account');
    cy.get('[data-qa="login-email"]').type('tes0@gmail.com');
    cy.get('[data-qa="login-password"]').type('tes123');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(10) > a').click();

    // assert
    cy.get(':nth-child(10) > a').should('have.text', ' Logged in as tes');
    /* ==== End Cypress Studio ==== */
  });

  it.only('User tidak bisa login dengan username dan password yang tidak valid', () => {
    // arrange
    cy.visit('https://automationexercise.com');
    /* ==== Generated with Cypress Studio ==== */

    // act
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > h2').should('have.text', 'Login to your account');
    cy.get('[data-qa="login-email"]').type('asdqweqq@gmail.com');
    cy.get('[data-qa="login-password"]').type('gatau');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="login-button"]').click();

    // assert

  });
})