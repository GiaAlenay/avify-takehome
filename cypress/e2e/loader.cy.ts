describe('Loader Component', () => {
    it('should display the loader while fetching data', () => {

      cy.intercept('GET', '**/generation', {
        statusCode: 200,
        body: {
          generationmix: [
            { fuel: 'Wind', perc: 40 },
            { fuel: 'Solar', perc: 20 },
            { fuel: 'Nuclear', perc: 30 },
            { fuel: 'Gas', perc: 10 },
          ],
          from: '2025-04-05T14:30Z',
          to: '2025-04-05T15:00Z',
        },
      }).as('getGenerationData');
      
      
      cy.visit('/'); 
  
     
      cy.get('.MuiCircularProgress-root', { timeout: 10000 }).should('be.visible');
  
  
      cy.wait('@getGenerationData');
  
      
      cy.get('div')
        .contains('UK Energy Mix')
        .should('be.visible');
    });
  });