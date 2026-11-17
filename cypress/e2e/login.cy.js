describe('Prueba 1: Verificar página de inicio', () => {
  
it('Debe mostrar el título Registro de Productos', () => {

  cy.visit('/');

  // Captura inicial
  cy.screenshot('02-titulo-verificacion');

  // Verificar el título visible del formulario
  cy.get('h1')
    .should('be.visible')
    .and('contain.text', 'Registro de Productos');

  // Captura después de validar
  cy.screenshot('02-titulo-validado');

});


  it('Debe tener un título válido en la página', () => {
    // Visitar la página
    cy.visit('/');
    
    // Tomar captura de pantalla antes de verificar título
    cy.screenshot('02-titulo-verificacion');
    
    // Verificar que exista un title
    cy.title().should('not.be.empty');
    
    // Tomar captura de pantalla final
    cy.screenshot('02-titulo-validado');
  });
});
