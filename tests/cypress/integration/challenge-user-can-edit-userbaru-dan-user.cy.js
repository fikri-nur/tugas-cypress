describe("User Can Edit User baru dan User", () => {
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
    it("User can edit user baru", () => {
        // act
        cy.get(".table td")
            .contains("user baru")
            .parent()
            .find(".btn-info")
            .click();

        cy.get(".section-title").should("have.text", "Edit User");
        cy.get("#name").clear().type("User Baru Edit");
        cy.get("#email").clear().type("userbaruedit@gmail.com");

        cy.get(".btn-primary").click();
        // assert
        /* ==== Generated with Cypress Studio ==== */
        cy.get("p").should("be.visible");
        cy.get("p").should("have.text", "User Berhasil Diupdate");
        /* ==== End Cypress Studio ==== */
    });

    it("User can edit user", () => {
        // act
        cy.get(".table td")
            .contains("user")
            .parent()
            .find(".btn-info")
            .click();

        cy.get(".section-title").should("have.text", "Edit User");
        cy.get("#name").clear().type("User Edit");
        cy.get("#email").clear().type("useredit@gmail.com");

        cy.get(".btn-primary").click();
        // assert
        /* ==== Generated with Cypress Studio ==== */
        cy.get("p").should("be.visible");
        cy.get("p").should("have.text", "User Berhasil Diupdate");
        /* ==== End Cypress Studio ==== */
    });

    // After each
    afterEach(() => {
        // act
        cy.get('[data-cy="username"]').click();
        cy.get('[data-cy="logout"]').click();
    });
});
