// import React from "react";
// import { Error } from "../../src/Error";
// import { mount } from "@cypress/react";  // Asegúrate de que tienes cypress/react instalado

// describe('Error Component', () => {
//   it('should display the error message and the additional text', () => {
//     const errorMSG = "Failed to fetch data";

//     // Monta el componente Error pasando el mensaje de error
//     mount(<Error errorMSG={errorMSG} />);

//     // Verifica que el mensaje de error se muestra
//     cy.get('.MuiAlert-message')
//       .should('contain.text', errorMSG)   // Verifica que el mensaje de error sea visible
//       .and('contain.text', 'Please try again later.');  // Verifica que el mensaje adicional esté visible

//     // Opcional: Verifica que el alert tenga la clase de error
//     cy.get('.MuiAlert-root')
//       .should('have.class', 'MuiAlert-standardError');  // Asegura que es un Alert de tipo error
//   });
// });