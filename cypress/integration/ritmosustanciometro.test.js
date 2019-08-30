describe('Ritmosustanciometro', () => {
    it('debería devolver el ritmo y sustancia que le digamos', () => {
      cy.server(); // Le decimos a Cypress que vamos a hacer uso de su server
      cy.route('GET', '/obtener-ritmosustancia', 100); // Le decimos a Cypress que la próxima vez que nuestra aplicación haga un pedido a una url que termine con `obtener-ritmo-y-sustancia`, la respuesta siempre sea 100
  
      cy.visit('http://localhost:3000/'); // Le decimos a Cypress que vaya al inicio de nuestra aplicación, en este caso suponemos que la aplicación esta corriendo en la URL `http://localhost:3000/`
  
      cy.get("[data-test='nombre']") // Obtenemos el campo de nombre
        .type('fcc{enter}'); // Escribimos fcc y forzamos un enter
  
      cy.contains('fcc: 99'); // Esperamos que nuestra aplicación tenga "fcc: 100" impreso en alguna parte
    });
  });