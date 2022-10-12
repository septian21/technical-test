const { expect } = require("chai")

describe('search', () => {
  it('user is able to search sugesstion list on wikipedia search field', () => {
    var input = "Test automation"
    cy.visit("https://www.wikipedia.org/")
    cy.get("#searchInput").click().type(input)
    cy.wait(1000)
    cy.get(".suggestion-title")
    .then(listSuggestion => {
      const listSuggestionCount = Cypress.$(listSuggestion).length;
      for(let i=0;i<=listSuggestionCount-1;i++){
        cy.get(".suggestion-title").eq(i)
        .invoke('text')
        .then((text) => {
          expect(text).to.contains(input)
        })
      }
    })
  })

  it('user is able to chose an language on wikipedia search field', () => {
    var input = "Motor"
    cy.get("#searchInput").click().clear()
    cy.get("#searchLanguage").select('Bahasa Indonesia').should('have.value', 'id')
    cy.get("#searchInput").click().type(input)
    cy.wait(1000)
    cy.get(".suggestion-title")
    .then(listSuggestion => {
      const listSuggestionCount = Cypress.$(listSuggestion).length;
      for(let i=0;i<=listSuggestionCount-1;i++){
        cy.get(".suggestion-title").eq(i)
        .invoke('text')
        .then((text) => {
          expect(text).to.contains(input)
        })
      }
    })
   })
})