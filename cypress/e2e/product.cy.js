/// <'reference' types="cypress-xpath" />
// import 'cypress-xpath'
// import {loginid} from'./pages/loginid.cy';

// const { type } = require("cypress/types/jquery")


// const Login = new loginid()



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
         
      // cy.visit('https://testapp.kloudsoft.co/matrices/new?filter=research')
      cy.wait(2000)
      cy.get('#matrix_name').type("Aditya")
      cy.get('#tagline_text').type("working on project")
      cy.get('.project_type-renderer > .btn').click()
      cy.get(':nth-child(1) > .well > .bottom > :nth-child(2) > .btn').wait(2000).click()
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
         // cy.get(':nth-child(1) > .well > .bottom > :nth-child(2) > .btn-success')
         // cy.wait(3500)
        //// // cy.get('a[href="/matrices/3f702d23791f2d531c29b92c85324981eapp/measure/9663f5c174286bd29695fab2067e73d3eapp/select_category?type=category_domain"]').click()
         cy.get('div.col-md-12 > trix-editor').type('Description')
         cy.get(':nth-child(6) > .col-md-8 > trix-editor').type('Business Impact')
         // cy.get(':nth-child(7) > .col-md-8 > trix-editor').type('values')
         cy.get('trix-editor[role="textbox"][input="values"]').type('value')
         // cy.get('div[class="col-md-12 col-sm-12 col-xs-12"] input[name="commit"]').click()
         cy.get('.col-md-12 > .btn').click()
      })


      it('step=3', () =>{
         const img = "Book1.jpg"
         const image = "book2.jpg"
         const image1 = "Book3.jpg"

         // cy.visit('https://testapp.kloudsoft.co/matrices/3f702d23791f2d531c29b92c85324981eapp/steps/base_page')
         cy.get('input[name="matrix[survey_title]"]').type('sorting card')
         cy.get('trix-editor').type('Introduction')
         cy.get('.trix-button--icon-italic').click()
         cy.get('.trix-button--icon-number-list').click()
         cy.get('input[name="matrix[logo]"]').attachFile(image);
         cy.get(':nth-child(5) > .col-md-6 > .selectize-control > .selectize-input').click()

         // cy.get('').select('Show Profile Logo').should('have.value','profile_logo').click()

         cy.get(':nth-child(7) > .col-md-6 > .selectize-control > .selectize-input').click()
         cy.get('input[name="matrix[banner]"]').attachFile(image1)
         cy.get('input[name="matrix[background_image]"]').attachFile(img)
         cy.get('.col-md-12 > .btn').click()

      })


      it('step=4', () => {

         // cy.visit('https://testapp.kloudsoft.co/matrices/3f702d23791f2d531c29b92c85324981eapp/steps/agreement')
         cy.get('#matrix_hide_agreement_checkbox').click()
         cy.get('trix-editor').type('Sometimes you may need to check if a user agrees with your licensing conditions. This needs to be conducted in a professional manner. Dt add your custom license agreement this will appear in terms and conditions link within a checkbox field')
         cy.get('.trix-button--icon-bold').click()
         cy.get('.col-md-12 > .btn').click()

      })
       
      it('step=5', () =>{

         // cy.visit('https://testapp.kloudsoft.co/matrices/3f702d23791f2d531c29b92c85324981eapp/steps/setting')
      //   cy.get('div[class="selectize-input items required has-options full has-items"]').click()
         cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
         cy.get('div.selectize-dropdown-content div').eq(3).click({force: true})
         cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
         cy.get('div.selectize-dropdown-content').eq(1).click()
         cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
         cy.get('div.selectize-dropdown-content').eq(2).click()
         // cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
         // cy.wait(3500)
         // cy.get('div.selectize-dropdown-content').eq(1).click()
         cy.get('#matrix_custom_current_comment_label').type('Current State Comment')
         cy.get('#matrix_submit_button_text').type(' matrix submit button text')

         // cy.get("div[class='col-md-12 col-sm-12 col-xs-12'] input[name='commit']").click()


   //       cy.get("#result-settings-tab").click()
   //       // cy.get("div[id='result_settings'] div[class='selectize-input items required full has-options has-items']").click()
   //       // cy.get('div.selectize-dropdown-content div').eq(2).click()
   //       cy.get("trix-editor[role='textbox'][input='submission_show_header']").type('On Form Submit Show:Thank You Page')
   //       cy.get("trix-editor[role='textbox'][input='submission_show_footer']").type('On Form Submit Show:Thank You Page')

   //       cy.get("#other-settings-tab").click()
   //       cy.get("#matrix_calendly_url").type('Aditya')
   //       cy.get("#matrix_video_url").type('Aditya')

   //       cy.get("div[class='col-md-12 col-sm-12 col-xs-12'] input[name='commit']").click()

   //       // cy.get('div[data-value="Full access"]').click()
   //       // cy.get('div.selectize-dropdown-content div').eq(2).click()
   //       // cy.get('#form_settings > :nth-child(1) > .col-md-8 > .selectize-control > .selectize-input').select('')
   //    //    cy.get('div[data-value="Information Required"]').click()
   //    //   cy.get('div.selectize-dropdown-content div').eq(1).click();
      })


      it('step=6 Add A Qusetion ', () => {
         cy.visit('https://testapp.kloudsoft.co/matrices/3f702d23791f2d531c29b92c85324981eapp/steps/setup')
         // cy.get('[href="/matrices/3f702d23791f2d531c29b92c85324981eapp/categories/new_category_block"]').click()
         // cy.get(':nth-child(1) > .well > .bottom > :nth-child(2) > .btn-success').click()
         cy.get(".btn.btn-primary.btn-lg.cat-new-question-sortable.new-block[data-remote='true']").click()
         cy.wait(4000)
         cy.get("div[class='row lgrids'] div:nth-child(3) div:nth-child(1) div:nth-child(2) div:nth-child(2) a:nth-child(2)").click()
         cy.wait(2000)
         cy.get(".btn.btn-primary.btn-lg.cat-new-question-sortable.new-block[data-remote='true']").click()
         cy.get("div[class='question-btn'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click()
         cy.wait(3500)
         cy.get("div[class='selectize-control form-control question_type single'] div[class='selectize-input items not-full has-options']").click()
         
         cy.get('div.selectize-dropdown-content div').eq(2).click()
         // cy.get("#question_number").type('1');
         cy.get("#question_body").type('which subject do you like more',{force: true})
         cy.get("trix-editor[role='textbox'][input='question_label']").type('Whether the trainer answer the Questions',{force: true})
          cy.get("trix-editor[role='textbox'][input='question_tooltip']").type('Whether the trainer answer the Questions',{force: true})
          cy.get(".selectize-input.items.required.invalid.not-full.has-options").click()
          cy.get('div.selectize-dropdown-content div').eq(22).click()
         cy.get("div[class='selectize-input items not-full has-options']").click()
         cy.get('div.selectize-dropdown-content div').eq(27).click({force: true})
         cy.get("input[value='Submit']").click()
         cy.get("div[class='col-md-offset-1 col-md-12 col-sm-12 col-xs-12'] input[name='commit']").click({force: true})


         cy.get('.remove_fields345.remove_fields.dynamic').click()

        cy.get('#question_ques_cus_lovs_attributes_0_label').type('new Lable')
        cy.get('#question_ques_cus_lovs_attributes_0_score').click()
        cy.get('#question_ques_cus_lovs_attributes_0_answer_weight').click()


         cy.get('[for="question_block_type_demographic"]').click()
         cy.get('#question_question_type').select('Attachment').shadow('hvae.value','Attachment')


         cy.get('#question_number').type('1')
         cy.get('#question_body').type('how many subject are there')
         cy.get('p.col-md-12 > .btn').click()
         cy.get(':nth-child(1) > .well > .col-xs-12 > .btn').click()

         cy.get(':nth-child(1) > .well > .col-xs-12 > .btn').click()
         cy.get('.close > span').click()

         cy.get(':nth-child(9) > .form-group > div.col-md-12 > trix-editor').type('how many subject are there')
         cy.get(':nth-child(10) > div.col-md-12 > trix-editor').type('how many subject are there')

         cy.get('div[data-value="Technology Advancement"]').click()
         cy.get('div.selectize-dropdown-content div').eq(1).click();

          cy.get(':nth-child(3) > .col-md-12 > .btn-default').click()


         cy.get(':nth-child(3) > .col-md-12 > .btn-success').click()

         cy.get('.col-md-offset-1 > .btn').click()
      })



      it('step=7', () =>  {
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/steps/project_dashboard')
         cy.get("div[id='manage_chart_82_word_cloud'] a[class='btn btn-sm btn-primary']").click({force: true})
         cy.wait(3500)
         cy.get('input[value="Save and Continue"]').click()
      })


      it('step=8', () => {
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/steps/submission_dashboard')
         cy.get("div[id='manage_chart_123_sentiment'] a[class='btn btn-sm btn-primary']").click({force: true})
         cy.wait(3500)
         cy.get("input[value='Save and Exit']").click()

      })

      it('step=9', () =>{
         cy.visit("https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/success")
         cy.get(".btn.btn-lg.btn-warning").click()
      })

      it('step=1', () =>{
         const imgs1 = "Book2.jpg"

         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/projects/481ce65afc6d811232428758a25f25b7eapp/steps/about')
         cy.get("#project_name").type('Sorting')
         cy.get(".btn.btn-default.btn-sm").click()
         cy.get("div[class='list'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) a:nth-child(1)").click()
         // cy.get("div[class='selectize-input items not-full']").type('CAT',{force: true})
         cy.get("#thumbUpload").attachFile(imgs1);
         cy.get("div[class='col-md-12 col-sm-12 col-xs-12'] input[name='commit']").click()
      })

      it('step=2', () =>{
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/projects/481ce65afc6d811232428758a25f25b7eapp/steps/meta_data')
         cy.get("span[class='section'] input[name='commit']").click()

      })
      it('step=3',() =>{
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/projects/481ce65afc6d811232428758a25f25b7eapp/steps/base_page')
         cy.get("span[class='section'] input[name='commit']").click()
      })

      it('step=4',() =>{
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/projects/481ce65afc6d811232428758a25f25b7eapp/steps/agreement')
         cy.get("span[class='section'] input[name='commit']").click()
      })

      it('step=5',() =>{
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/projects/481ce65afc6d811232428758a25f25b7eapp/steps/setting')
         cy.get("span[class='section'] input[name='commit']").click()
      })

      it('step=6',() =>{
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/projects/481ce65afc6d811232428758a25f25b7eapp/steps/build')
         cy.get("input[class='btn btn-block btn-success']").click()
      })

      it('step=7',() =>{
         cy.visit('https://testapp.kloudsoft.co/matrices/80eda5d08740fd455b5705e9208cf3f3eapp/projects/481ce65afc6d811232428758a25f25b7eapp/steps/share')
         cy.get(".btn.btn-md.btn-primary.btn-fill.add_fields").click()
         cy.get("div[class='form-group'] input[placeholder='Survey URL Name']").type('Sorting')
         cy.get(".btn.btn-default.btn-sm.select-template-").click()
         cy.get("div[class='modal-body'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) a:nth-child(1)").click()
         cy.get("div[class='form-group'] input[placeholder='Survey URL']").type("ce464881-a3f3-4c35-9a45-7d4d5b2e",{force: true})
         cy.get("div[class='form-group'] div[class='selectize-input items required full has-options has-items']").click()
         cy.get('div.selectize-dropdown-content').eq(3).click({force: true})
         cy.get("input[formnovalidate='formnovalidate']").click()
         cy.get(".btn.btn-sm.btn-primary.btn-fill[target='_blank']").click({ multiple: true })
      })

      it('step=8', () =>{
         cy.visit('https://testapp.kloudsoft.co/survey/ce464881-a3f3-4c35-9a45-7d4d5b2e62b2?test_submission=true')
         cy.get("#survey_selection").click()
      })

      it('step=9', () =>{
         // cy.visit('https://testapp.kloudsoft.co/survey/survey_continue')
         cy.get("#submitter_first_name").type('Aditya')
         cy.get("#submitter_last_name").type('Dhakate')
         cy.get("#submitter_email").type('ad@gmail.com')
         cy.get("#submitter_submission_answers_attributes_6686_answer").type('yes')
         cy.get("#project_project_agreement").click()
         cy.get("input[value='Proceed To Survey']").click()

      })
 })



// ///  learn  xpath and css selector in cypress

// cy.xpath() (//div[@class='form-group']//div[@class='item'])[3]


// cy,get('div.selectize-dropdown-content div').eq(1)
// cy,get('div.selectize-dropdown-content div').eq(1).click();


// css for   // div.form-group div.item



// div[data-value="Full access"]

//div[@class='form-group']//div[@class='item'])[3]
// cy.xpath()

// div.selectize-dropdown-content div
// css

// cy.get('div.selectize-dropdown-content div').eq(1)
// cy.get('div.selectize-dropdown-content div').eq(1).click();


// div[data-value="Full access"]

// div.form-group div.item