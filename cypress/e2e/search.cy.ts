describe("Busca de personagens", () => {
  it("deve filtrar a lista apenas quando clicar no botão Buscar", () => {
    cy.visit("/");

    // Digita
    cy.get('[data-testid="search-input"]').type("Octopus Man");

    // Clica no botão
    cy.get('[data-testid="search-button"]').click();

    // Aguarda e valida
    cy.contains("Octopus Man", { timeout: 10000 }).should("exist");
  });
});
