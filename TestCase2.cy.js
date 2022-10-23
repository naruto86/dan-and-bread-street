/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

context('Task2', () => {
    // #2.1
    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })

    // #2.2
    it('Validate if user can clear filter', () => {

      // click Today's Deals
      // #2.2.1
      cy.get('a').contains('Today\'s Deals').click({force: true})
      
      // mark check Amazon Devices from Departments filter
      // #2.2.2
      cy.get('.CheckboxFilter-module__checkboxLabel_21MUk0e7QdlZKH5Xcwap-F').contains('Amazon Devices').click()
      
      // validate if Clear link is visible
      // #2.2.3
      cy.get('a').contains('Clear').should('be.visible')

      // click clear
      // #2.2.4
      cy.get('a').contains('Clear').click()

      // validate if Clear link is visible
      // #2.2.4
      cy.get('.Checkbox-module__checkBoxOutline_281PiTekJcpF_Pm5QDexLv').eq(4).should('not.be.checked');
    })

    // #2.3 " Scissors Color"
    it('Validate if user can select product variation', () => {

      // navigate to the link
      // #2.3.1
      cy.visit('https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B08T1GMKVF')

      // click variation
      // #2.3.3
      cy.get('#a-autoid-12-announce').click()
      
      // validate if product tile contains Red, Black, Blue
      // #2.3.3
      cy.get('#productTitle').should(($prodTitle) => {
        expect($prodTitle).to.contain('Red, Black, Blue')
      })
    })

    // #2.4 "Add to Card"
    it('Validate if user can add to cart', () => {
      
      // navigate to the link
      // #2.4.1
      cy.visit('https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B08T1GMKVF')
      
      // click add to cart button
      // #2.4.2
      cy.get('#add-to-cart-button').click()
      
      // validate if Added to Cart message is displayed
      // #2.4.3
      cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').should(($cartConfirmation) => {
        expect($cartConfirmation).to.contain('Added to Cart')
      })

      // validate if selected production variations are displayed to cart
      // #2.4.3
      cy.get('.sw-product-variation').should(($productVariations) => {
        expect($productVariations.eq(0)).to.contain('Red, Black, Blue')
        expect($productVariations.eq(1)).to.contain('3-Pack')
      })
      
      // validate if selected production displayed to cart
      // #2.4.4
      cy.get('#ewc-compact-body').find('a').should('have.attr', 'href', '/gp/product/B08T1GMKVF/ref=ewc_pr_img_1?smid=A3IZ8QKHEGDVPN&psc=1')
    
    })

})