

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
       
    cy.visit('https://testapp.kloudsoft.co/matrices/new?filter=research')
    cy.wait(2000)
    cy.get('#matrix_name').type("testing")
    cy.get('#tagline_text').type("working on project")
    cy.get('.project_type-renderer > .btn').click()
    cy.get("div[class='modal-body'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(2) a:nth-child(1)").wait(2000).click()
    cy.get('input[name="matrix[thumbnail_image]"]').attachFile(img);
    cy.get(':nth-child(7) > .col-md-8 > .selectize-control > .selectize-input').type('Alternative')
    cy.get('div[data-value="Full access"]').click()
    cy.get('div.selectize-dropdown-content div').eq(2).click();
    cy.get('.col-md-12 > .btn').click()

    // .select('Partial access').should('have','Partial access')
     } )
   
 
    it('step=2', () => {
       // cy.visit('https://testapp.kloudsoft.co/matrices/3f702d23791f2d531c29b92c85324981eapp/steps/meta_data')
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

    it('step=3', () => {
        cy.visit("https://testapp.kloudsoft.co/matrices/17e458523c07a16630bec9ba501f137ceapp/steps/setup")
      cy.get(".new-question").click()
      cy.get(".btn.btn-xs.btn-default").click()
      cy.get("a[class='btn btn-success btn-md pull-right 317-select']").click()
      cy.get("input[value='Submit']").click()
      cy.get("div[class='col-md-offset-1 col-md-12 col-sm-12 col-xs-12'] input[value='Save and Exit']").click()

    })  
    
    it('step=4', () => {
        cy.visit("https://testapp.kloudsoft.co/matrices/17e458523c07a16630bec9ba501f137ceapp/success")
       cy.get(".btn.btn-lg.btn-warning").click()
    })

    it('step-5', () => {
        cy.visit("https://testapp.kloudsoft.co/matrices/17e458523c07a16630bec9ba501f137ceapp/projects/new")
        cy.get("div[class='col-md-6 col-sm-12 col-xs-12 '] input[type='text']").type('Sorting Card')
        cy.get("input[value='Sorting Card & Bucket']").type('Sorting Card & Bucket')
        cy.get(".btn.btn-default.btn-sm").click()
        cy.get("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)").click()
        cy.get("input[placeholder='Please add group (optional)']").type('Framework')
        cy.get("div[class='col-md-12 col-sm-12 col-xs-12'] input[value='Save and Continue']").click()
    })

    it('step=6', () =>{
        cy.visit("https://testapp.kloudsoft.co/matrices/17e458523c07a16630bec9ba501f137ceapp/projects/5a4bff6df9f9aceda925224b069d2853eapp/steps/meta_data")
        cy.get("div[class='category_id-renderer'] a[class='btn btn-default btn-sm']").click()
        cy.wait(2500)
        cy.get("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)").click()
        cy.get("div[class='category_domain-renderer'] a[class='btn btn-default btn-sm']").click()
        cy.wait(2500)
        cy.get("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)").click()
        // cy.get("trix-editor[role='textbox'][input='description_body']").click()
        cy.get("trix-editor[role='textbox'][input='description_body']").type('This is an optional section. Please provide this information if you are intending to share this application / project with your team / clients so they have clear understanding about what this is for and the insights it helps deliver.')
        cy.get("trix-editor[role='textbox'][input='business_impact']").type('This is an optional section. Please provide this information if you are intending to share this application / project with your team / clients so they have clear understanding about what this is for and the insights it helps deliver.')
        cy.get("trix-editor[role='textbox'][input='values']").type('This is an optional section. Please provide this information if you are intending to share this application / project with your team / clients so they have clear understanding about what this is for and the insights it helps deliver.')
        cy.get("div[class='col-md-12 col-sm-12 col-xs-12'] input[value='Save and Continue']").click()
    })

    it('step=7', () =>{
        cy.visit("https://testapp.kloudsoft.co/matrices/17e458523c07a16630bec9ba501f137ceapp/projects/5a4bff6df9f9aceda925224b069d2853eapp/steps/dashboard")
        cy.get("div[class='selectize-control form-control selectized single'] div[class='selectize-input items not-full has-options']").click()
        cy.get('div.selectize-dropdown-content').eq(3).click({force: true})
        cy.get("input[value='true'][type='checkbox']").click({ multiple: true })
        cy.get("div[class='selectize-control project_insight_source single'] div[class='selectize-input items has-options full has-items']").click()
        cy.get('div.selectize-dropdown-content').eq(3).click({force: true})
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)").click()
        cy.get('div.selectize-dropdown-content').eq(3).click({force: true})
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(9) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)").click()
        cy.get('div.selectize-dropdown-content').eq(2).click({force: true})
        cy.get("input[type='text']").type('ad@gmail.com')
        cy.get(".btn.btn-primary.btn-lg").click()
        cy.get(".btn.btn-xs.btn-default").click()
        cy.get("a[class='btn btn-success btn-md pull-right 317-select']").click()
        cy.get("select[placeholder='Select Data Source']").click()
        cy.get('div.selectize-dropdown-content').eq(7).click({force: true})
        cy.get("select[name='insight_query[schedule]']").click()
        cy.get('div.selectize-dropdown-content').eq(2).click({force: true})
        cy.get("select[name='insight_query[check_type]']").click()
        cy.get('div.selectize-dropdown-content').eq(2).click({force: true})
        cy.get("div[class='col-md-12 col-sm-12 col-xs-12 '] input[type='text']").type('ad@gmail.com')
        cy.get('input[value="Submit"]').click()
        cy.get(".btn.btn-block.btn-success").click()

    })

    it('step=8', () =>{
        cy.visit("https://testapp.kloudsoft.co/matrices/17e458523c07a16630bec9ba501f137ceapp/projects/5a4bff6df9f9aceda925224b069d2853eapp/success")
        cy.get(".btn.btn.btn-lg.btn-dark").click()

    })

})