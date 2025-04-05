describe('App Component', () => {
  it('should load the UK Energy Mix page', () => {
    cy.visit('http://localhost:8081');
    cy.contains('UK Energy Mix'); 
  });
});