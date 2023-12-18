describe("User Can Login to System", () => {
    // Positive Test Case
    it.only("User can login with valid username and valid password", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        cy.get('[data-cy="email"]').type("superadmin@gmail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="username"]').should("have.text", "Hi, SuperAdmin");
    });

    // Positive Test Case dengan menggunakan data-cy
    it("User can login with valid username and valid password, then logout", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        cy.get('[data-cy="email"]').type("superadmin@gmail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="username"]').should("have.text", "Hi, SuperAdmin");

        // act
        cy.get('[data-cy="username"]').click();
        cy.get('[data-cy="logout"]').click();

        // assert
        cy.get('[data-cy="login-page"]').should("have.text", "Login");
    });

    // Positive Test Case dengan menggunakan cypress experimental
    it("User can login with valid username and password, then logout (experimental)", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-cy="email"]').type("superadmin@gmail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="username"]').should("have.text", "Hi, SuperAdmin");

        // act
        cy.get('[data-cy="username"]').click();
        cy.get('[data-cy="logout"]').click();

        // assert
        cy.get('[data-cy="login-page"]').should("have.text", "Login");
        /* ==== End Cypress Studio ==== */
    });

    // Negative Test Case
    it("User cannot login with valid username and invalid password", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        cy.get('[data-cy="email"]').type("superadmin@gmail.com");
        cy.get('[data-cy="password"]').type("password-salah");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="alert-email"]').should(
            "have.text",
            "These credentials do not match our records."
        );
    });

    it("User cannot login with invalid username and valid password", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        cy.get('[data-cy="email"]').type("superdminqweqe@gmail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="alert-email"]').should(
            "have.text",
            "These credentials do not match our records."
        );
    });

    it("User cannot login with empty username and valid password", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        cy.get('[data-cy="email"]').type(" ");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="alert-email"]').should(
            "have.text",
            "The email field is required."
        );
    });

    it("User cannot login with valid username and empty password", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        cy.get('[data-cy="email"]').type("superadmin@gmail.com");
        cy.get('[data-cy="password"]').type(" ");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="alert-password"]').should(
            "have.text",
            "The password field is required."
        );
    });

    it("User cannot login with empty username and empty password", () => {
        // arrange
        cy.visit("http://localhost:8000");

        // act
        cy.get('[data-cy="email"]').type(" ");
        cy.get('[data-cy="password"]').type(" ");
        cy.get('[data-cy="submit"]').click();

        // assert
        cy.get('[data-cy="alert-email"]').should(
            "have.text",
            "The email field is required."
        );

        cy.get('[data-cy="alert-password"]').should(
            "have.text",
            "The password field is required."
        );
    });
});
