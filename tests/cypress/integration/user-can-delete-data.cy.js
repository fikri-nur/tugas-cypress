describe("User Can Delete Data", () => {
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
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#name").type("Fikri");
        cy.get("#email").type("fikri@email.com");
        cy.get("#password").type("password");
        cy.get(".btn-primary").click();

        // assert
        cy.get("p").should("be.visible");
        cy.get("p").should("have.text", "Data Berhasil Ditambahkan");

        /* ==== End Cypress Studio ==== */
    });

    // Positive test case
    it("User can delete data", () => {
        /* ==== Generated with Cypress Studio ==== */
        // act
        cy.get(".table td").contains("Fikri").parent().find(".btn-danger").click();
        cy.get(":nth-child(2) > .swal-button").click();

        // assert
        cy.get(".alert")
        .should("be.visible")
        .and("have.class", "alert-success")
        .should("contain", "User Deleted Successfully");
        /* ==== End Cypress Studio ==== */

        cy.get(".table").should("not.contain", "Fikri");
    });

    it("User can cancel delete data", () => {
        /* ==== Generated with Cypress Studio ==== */
        // act
        cy.get(".table td").contains("Fikri").parent().find(".btn-danger").click();
        cy.get(':nth-child(1) > .swal-button').click();

        // assert
        cy.get(".table td").contains("Fikri").should("be.visible");
        /* ==== End Cypress Studio ==== */
    });

    // After each
    afterEach(() => {
        // act
        cy.get('[data-cy="username"]').click();
        cy.get('[data-cy="logout"]').click();
    });
});
