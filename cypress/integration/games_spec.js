describe("show list of games", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("loads 20 games", () => {
    cy.get(".game-card").should("have.length", 20);
  });
});

describe("interacting with games", () => {
  it("navigating to a generated url", () => {
    cy.visit("/");
    cy.get(".game-card")
      .first()
      .click();
    cy.url().should("include", "/game/");
  });

  it("check video link", () => {
    cy.visit("/");
    cy.get(".game-card")
      .first()
      .click();
    cy.url().should("include", "/game/");
    cy.get(".section .level a")
      .first()
      .should("have.attr", "target", "_blank");
  });
});
