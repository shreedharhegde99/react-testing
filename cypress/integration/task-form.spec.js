describe("Task input form", function () {
	it("should visit home page", function () {
		cy.visit("/");
		cy.focused("have.class", "task");
	});

	it("type value in input tag ", function () {
    cy.visit("/");
    cy.get(".task")
      .type("BUY BREAD")
      .should('have.value',"BUY BREAD");
    



    
	});
});
