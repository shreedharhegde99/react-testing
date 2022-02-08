beforeEach(()=>cy.visit('/'));


describe('testing input box', () => { 
  it('on visiting home page titile should be visible', () => {
    cy.get('h2')
      .should('have.text', 'Tasks')

    it('should have placeholder value as Add something', () => {  
    cy.get('.task')
      .should('have.attr', 'placeholder', 'Add something')
    
    })
    

   
  } )
})

describe('should type the given input value', () => {
  it('should type hello world', () => {
    cy.get('.task')
      .type('HELLO WORLD')
    .should('have.value','HELLO WORLD')
  })

})


describe('submitting the input', () => {
  it('should save the input to the tasks', () => {
    cy.server()
    cy.route("POST", '/api/task', {
      title: "SHREEDHAR HEGDE"
      
    })
    


    cy.get('.task')
      .type("SHREEDHAR HEGDE")
      .type('{enter}')
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("SHREEDHAR BHAT")
    .type('{enter}')
      
    cy.get('.task-list li')
      .should('have.length',2)    
  })
})

describe('throwing an error ', () => {
  
  it('should throw an error when data is submitted', () => {
    cy.server()
     cy.route({  
      url: '/api/task',
      status: 404,
      method: "POST",
      reaponse:{}

    })

    cy.get('.task')
      .type('HELLO')
      .type('{enter}')
      .get('.error')
    .should('have.text','Oops error!')
  })
})