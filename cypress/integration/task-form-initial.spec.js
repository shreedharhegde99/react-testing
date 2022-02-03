
describe('app onitialsization ', function () {
    beforeEach(()=>cy.visit('/'))


  it.only('should load data on loadng', function () {
    cy.server()
    cy.route('GET', '/api/task', 'fixture:data')
    cy.get('.task-list li')
    .should('have.length',3)

    })
})