describe('product Test', function () {
    it('OS For Trust Orchestration', () => {
       cy.visit('')
       cy.wait(4000)
       cy.get("input#user_email").type("");
       cy.get("input#user_password").type("");
       cy.get("input[type='submit']").click();


       // cy.wait(5000);
       //  cy.get('a[href="/matrices?filter=research"]').click({ force: true });
    
       })
    
    
       it('Research to Apps', function () {
          cy.wait(4000);
          cy.get('a[href="/matrices?filter=research"]').click({ force: true });
    
    
        })
    
        it('Apps cerate Account', () =>{
          cy.get('div[id="demoactive"] div[class="new-button"] a[class="button button-small button-red"]').click()
          // cy.get('a[href="/matrices/new?filter=research"]').click()
          // cy.get('.new-button > .button').click()
    
        })
it('Step=1', () =>{
    const img = "Book1.jpg"
       
    cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/about')
    cy.wait(2000)
    cy.get('#matrix_name').type("testing")
    cy.get('#tagline_text').type("working on project")
    cy.get('.project_type-renderer > .btn').click()
    cy.get("div[class='row lgrids'] div:nth-child(3) div:nth-child(1) div:nth-child(2) div:nth-child(2) a:nth-child(1)").wait(2000).click()
    cy.get('input[name="matrix[thumbnail_image]"]').attachFile(img);
    cy.get(':nth-child(7) > .col-md-8 > .selectize-control > .selectize-input').type('Alternative')
    cy.get('div[data-value="Full access"]').click()
    cy.get('div.selectize-dropdown-content div').eq(2).click();
    cy.get('.col-md-12 > .btn').click()

     } )

     it('step=2', () => {
      cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/meta_data')
      cy.get("div[class='category_id-renderer'] a[class='btn btn-default btn-sm']").click()
      cy.get("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)").click()
      cy.wait(2500)
      cy.get("div[class='category_domain-renderer'] a[class='btn btn-default btn-sm']").click()
      cy.wait(2500)
      cy.get("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)").click()
      cy.get('div.col-md-12 > trix-editor').type('Description')
      cy.get(':nth-child(6) > .col-md-8 > trix-editor').type('Business Impact')
      cy.get('trix-editor[role="textbox"][input="values"]').type('value')
      // cy.get('div[class="col-md-12 col-sm-12 col-xs-12"] input[name="commit"]').click()
      cy.get('.col-md-12 > .btn').click()
   })

   it('step=3', () =>{
    const img = "Book1.jpg"
    const image = "book2.jpg"
    const image1 = "Book3.jpg"

    cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/base_page')
    cy.get('input[name="matrix[survey_title]"]').type('sorting card')
    cy.get('trix-editor').type('Introduction')
    cy.get('.trix-button--icon-italic').click()
    cy.get('.trix-button--icon-number-list').click()
    cy.get('input[name="matrix[logo]"]').attachFile(image);
    cy.get(':nth-child(5) > .col-md-6 > .selectize-control > .selectize-input').click()
    cy.get(':nth-child(7) > .col-md-6 > .selectize-control > .selectize-input').click()
    cy.get('input[name="matrix[banner]"]').attachFile(image1)
    cy.get('input[name="matrix[background_image]"]').attachFile(img)
    cy.get('.col-md-12 > .btn').click()

 })

 it('step=4', () => {

  cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/agreement')
  cy.get('#matrix_hide_agreement_checkbox').click()
  cy.get('trix-editor').type('Sometimes you may need to check if a user agrees with your licensing conditions. This needs to be conducted in a professional manner. Dt add your custom license agreement this will appear in terms and conditions link within a checkbox field')
  cy.get('.trix-button--icon-bold').click()
  cy.get('.col-md-12 > .btn').click()

})

it('step=5', () =>{

  cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/setting')
//   cy.get('div[class="selectize-input items required has-options full has-items"]').click()
  cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
  cy.get('div.selectize-dropdown-content div').eq(3).click({force: true})
  cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
  cy.get('div.selectize-dropdown-content').eq(1).click()
  cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
  cy.get('div.selectize-dropdown-content').eq(2).click()
  cy.get('#matrix_custom_current_comment_label').type('Current State Comment')
  cy.get('#matrix_submit_button_text').type(' matrix submit button text')
  cy.get("div[class='col-md-12 col-sm-12 col-xs-12'] input[value='Save and Continue']").click()
    })  
    
    it('step=6  ', () => {
      cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/setup')
      cy.get(".btn.btn-primary.btn-lg.cat-new-question-sortable.new-block[data-remote='true']").click()
      cy.wait(2000)
      cy.get("div[class='row lgrids'] div:nth-child(3) div:nth-child(1) div:nth-child(2) div:nth-child(2) a:nth-child(2)").click()
      cy.wait(1500)
      cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)").click()
      cy.wait(1500)
      cy.get("label[for='question_block_type_demographic']").click()
      cy.get("div[class='selectize-input items has-options not-full']").click()
      cy.get('div.selectize-dropdown-content div').eq(2).click({force: true})
      cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Whether the trainer answer the Questions')
      cy.get("trix-editor[role='textbox'][input='question_label']").type('Whether the trainer answer the Questions')
      cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Whether the trainer answer the Questions")
      cy.get('.selectize-input.items.required.invalid.not-full.has-options').click({force: true})
      cy.get('div.selectize-dropdown-content div').eq(22).click()
      cy.get("div[class='selectize-input items not-full has-options']").click()
      cy.get('div.selectize-dropdown-content div').eq(25).click({force: true})
      cy.get("input[value='Submit']").click()
      cy.get("div[class='col-md-offset-1 col-md-12 col-sm-12 col-xs-12'] input[value='Save and Exit']").click({force: true})
   })

   it('step=7', () => {

    cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/project_dashboard')
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)').click()
    cy.get("input[value='Save and Continue']").click()
   })
   it('step=9', () =>{
    cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/steps/submission_dashboard')
    cy.get('div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) a:nth-child(1)').click()
    cy.get("input[value='Save and Exit']").click()
   })

  it('step=8', () =>{
    cy.visit('https://testapp.kloudsoft.co/matrices/5379dad85dfca498493341e648121723eapp/success')
    cy.get(".btn.btn-lg.btn-warning").click()
  })

  // it('step=9', () =>{
  //   cy.visit('')
  // })

})