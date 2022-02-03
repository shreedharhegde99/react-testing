describe("Task form submt", function () {
  beforeEach(() => cy.visit('/'))
  

  it('add a new item on enter', function () {
    const text = "BUY MILK"
    cy.server()
    cy.route("POST", '/api/task', {
      title: text,
      id: 1,
      completed:false
    })

    cy.get('.task')
      .type(text)
      .type('{enter}')
    
    cy.get('.task-list li')
      .should('have.length', 1)
      .and('contain',text)
  })



  it.only('add a new item ,on failure show error message ', function () {
    
    const text = "BUY Bread"
    cy.server()
    cy.route({  
      url: '/api/task',
      status: 500,
      method: "POST",
      reaponse:{}

    })

    cy.get('.task')
      .type(text)
      .type('{enter}')
    
    cy.get('.error')
      .should('be.visible')
     
  })
})