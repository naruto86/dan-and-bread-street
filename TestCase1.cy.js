/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

context('Task1', () => {

    it('Validate if user can navigate to where is my stuff', () => {
      // visit url #1.6
      cy.visit('https://www.amazon.com/')

      // click menu 
      // #1.7
      cy.get('#nav-hamburger-menu').click({force: true})

      // click Customer Servie 
      // #1.7
      cy.get('[href="/gp/help/customer/display.html?nodeId=508510&ref_=nav_em_cs_hm_0_1_1_38"]').click()
      
      // type "where is My Stuff" in search box 
      // #1.8
      cy.get('#hubHelpSearchInput').type('where is My Stuff')
      
      // press Enter
      // 1.9
      cy.get('#hubHelpSearchInput').type("{enter}")
      
    })

    
})