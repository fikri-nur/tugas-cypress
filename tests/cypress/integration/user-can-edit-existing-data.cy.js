describe("User Can Edit Existing Data", () => {
    // Before each test
    beforeEach(() => {
        // arrange
        cy.visit("http://localhost:8000");
        // reset database by calling php artisan migrate:fresh --seed
        cy.exec("php artisan migrate:fresh --seed");

        // act
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-cy="email"]').type("superadmin@gmail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="submit"]').click();
        cy.get(":nth-child(2) > .has-dropdown > .fas").click();
        cy.get(".active > .dropdown-menu > li > .nav-link").click();

        /* ==== End Cypress Studio ==== */
    });

    // Positive test case
    it("User can edit existing data", () => {
        // act
        cy.get(".table td").contains("user").parent().find(".btn-info").click();

        cy.get(".section-title").should("have.text", "Edit User");
        cy.get("#name").clear().type("Fikri");
        cy.get("#email").clear().type("fikri@gmail.com");

        cy.get(".btn-primary").click();
        // assert
        /* ==== Generated with Cypress Studio ==== */
        cy.get("p").should("be.visible");
        cy.get("p").should("have.text", "User Berhasil Diupdate");
        /* ==== End Cypress Studio ==== */
    });

    // Negative test case
    it("User cannot edit existing data because empty name", () => {
        // act
        cy.get(".table td").contains("user").parent().find(".btn-info").click();

        cy.get(".section-title").should("have.text", "Edit User");
        cy.get("#name").clear().type(" ");
        cy.get("#email").clear().type("fikri@gmail.com");

        cy.get(".btn-primary").click();
        // assert
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.invalid-feedback').should('be.visible');
        cy.get('.invalid-feedback').should('have.text', '\n                                    The name field is required.\n                                ');
        /* ==== End Cypress Studio ==== */
    });
    
    // After each
    afterEach(() => {
        // act
        cy.get('[data-cy="username"]').click();
        cy.get('[data-cy="logout"]').click();
    });
});
