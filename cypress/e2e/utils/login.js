export const loginHelper = (username, password) => {
    cy.visit('/');
    cy.get('[data-cy="username"]').type(username);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="login"]').click();
    
}