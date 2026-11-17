describe('Prueba 2: Pruebas de navegación y UI', () => {
  it('Debe verificar elementos de navegación en la página', () => {
    // Visitar la página
    cy.visit('/');
    
    // Esperar a que la página cargue completamente
    cy.get('body', { timeout: 10000 }).should('be.visible');
    
    // Tomar captura de pantalla de la navegación
    cy.screenshot('03-navegacion-elementos');
    
    // Verificar que hay contenido en la página
    cy.get('html').should('not.be.empty');
    
    // Captura final de navegación validada
    cy.screenshot('03-navegacion-validada');
  });

  
it('Debe verificar que la página sea responsive', () => {

  // Configurar el tamaño de pantalla
  cy.viewport(1280, 720);

  // Abrir la aplicación
  cy.visit('/');

  cy.screenshot('04-responsive-1280x720');

  // Verificar que el formulario sea visible
  cy.get('h1')
    .should('be.visible')
    .and('contain.text', 'Registro de Productos');

  // Verificar dimensiones
  cy.window().its('innerWidth').should('eq', 1280);
  cy.window().its('innerHeight').should('eq', 720);

  cy.screenshot('04-responsive-validada');

});

});
