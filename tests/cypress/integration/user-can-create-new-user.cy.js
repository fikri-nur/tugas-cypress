describe('User Can Create New User', () => {
  // Before each test
  beforeEach(() => {
    // arrange
    cy.visit('http://localhost:8000');
    // reset database by calling php artisan migrate:fresh --seed
    cy.exec('php artisan migrate:fresh --seed');

    // act
    cy.get('[data-cy="email"]').type('superadmin@gmail.com');
    cy.get('[data-cy="password"]').type('password');
    cy.get('[data-cy="submit"]').click();
    cy.get(':nth-child(2) > .has-dropdown > .fas').click();
    cy.get('.active > .dropdown-menu > li > .nav-link').click();
  })
  // Positive test case
  it('user can create new user', () => {
    cy.get('[data-cy="create-button"]').click();
    cy.get('#name').type('Fikri');
    cy.get('#email').type('fikri@email.com');
    cy.get('#password').type('password');
    cy.get('[data-cy="submit-create"]').click();

    /* ==== Generated with Cypress Studio ==== */
    // assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');

    /* ==== End Cypress Studio ==== */
  });

  it.only('user cannot create new user because invalid email', () => {
    cy.get('[data-cy="create-button"]').click();
    cy.get('#name').type('Fikri');
    cy.get('#email').type('fikriemail.com');
    cy.get('#password').type('password');
    cy.get('[data-cy="submit-create"]').click();

    /* ==== Generated with Cypress Studio ==== */
    // assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'The email must be a valid email address.');

    /* ==== End Cypress Studio ==== */
  });

  it('user cannot create new user because name is required', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type(' ');
    cy.get('#email').type('fikri@email.com');
    cy.get('#password').type('password');
    cy.get('.btn-primary').click();

    /* ==== Generated with Cypress Studio ==== */
    // assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'The name field is required.');

    /* ==== End Cypress Studio ==== */
  });

  // After each test
  afterEach(() => {
    // act
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="logout"]').click();
  })
})