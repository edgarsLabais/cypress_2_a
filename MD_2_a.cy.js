describe('Selectable Test', () => {
  it('should highlight selected numbers', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // ii. Click - Make Appointment
    cy.get("#btn-make-appointment").click();


   // iii. Set username and password fields with the demo account credentials

   cy.get("#txt-username").type("John Doe");

   cy.get("#txt-password").type("ThisIsNotAPassword");

  // iv. Click - Login 
  cy.get("#btn-login").click();

// 1. Facility - Seoul CURA Healthcare Center

  cy.get("select") 

  // 1. Izvēlas vērtību "Seoul CURA Healthcare Center"
  .select("Seoul CURA Healthcare Center"); 

 // 2. Check - Apply for hospital readmission
  cy.get("#chk_hospotal_readmission").check();

  // 3. Select – Medicaid
  cy.get("#radio_program_medicaid").check({ force: true });

  // 4. Set Date value by using the widget – 30
  cy.get("#txt_visit_date").type("30/06/2023");


  // nepiecie'sams lai tiktu prom no kalendara
  cy.contains("Make Appointment").click();

// 5. Set comment - CURA Healthcare Service
cy.get("#txt_comment").type("CURA Healthcare Service");

// 6. Click - Book Appointment
cy.get("#btn-book-appointment").click();


//Validacija 

cy.get("#facility")
  .should("contain", "Seoul CURA Healthcare Center");

  cy.get("#hospital_readmission")
  .should("contain", "Yes");

  cy.get("#program")
  .should("contain", "Medicaid");

  cy.get("#visit_date")
  .should("contain", "30/06/2023");

  cy.get("#comment")
  .should("contain", "CURA Healthcare Service");

  });
});