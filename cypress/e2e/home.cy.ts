describe('Página inicial', () => {
  it('deve carregar a lista de personagens', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="character-card"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
  })
})
