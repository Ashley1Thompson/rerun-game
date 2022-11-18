import {loginHelper} from "../e2e/utils/login"

const username = 'canslercp'
const password = 'music123'

describe('login and win the game with no worng choices', () => {
    before(() => {

        loginHelper(username, password)
    })

    it('starts game and navigates through to the end', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#beginLone').click();
        cy.get('#atriumRone').click();
        cy.get('#kitchenRone').click();
        cy.get('#acknowledgeLone').click();
        cy.get('#commandRone').click();
        cy.get('#kitchenLtwo').click();
        cy.get('#atriumRtwo').click();
        cy.get('#engineeringLtwo').click();
        cy.get('#atriumRthree').click();
        cy.get('#kitchenRthree').click();
        cy.get('#commandRthree').click();
        cy.get('#botanyLthree').click();
        cy.get('#botanyRthree').click();
        cy.get('#commandLfour').click();
        cy.get('#kitchenLfour').click();
        cy.get('#atriumLfour').click();
        cy.get('#engineeringLfour').click();
        cy.get('#scienceLfour').click();
        cy.get('#engineeringRfive').click();
        cy.get('#atriumRfive').click();
        cy.get('#kitchenLfive').click();
        cy.get('#kitchenRfive').click();
        cy.get('#atriumLsix').click();
        cy.get('#engineeringRsix').click();
        cy.get('#play-again').click();
        /* ==== End Cypress Studio ==== */
    })

    // it('checks to se if score was saved on leaderboard', () => {

    // })
})