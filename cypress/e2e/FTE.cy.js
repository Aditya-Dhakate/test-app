// describe('product Test', function () {
//     it('OS For Trust Orchestration', () => {


    
//        cy.visit('')
//        cy.wait(4000)
//        cy.get("input#user_email").type("");
//        cy.get("input#user_password").type("");
//        cy.get("input[type='submit']").click();
    
    
//        })
    
    
//        it('Research to Apps', function () {
//           cy.wait(4000);
//           cy.get('a[href="/matrices?filter=research"]').click({ force: true });
    
    
//         })
    
//         it('Apps cerate Account', () =>{
//           cy.get('div[id="demoactive"] div[class="new-button"] a[class="button button-small button-red"]').click()
//           // cy.get('a[href="/matrices/new?filter=research"]').click()
//           // cy.get('.new-button > .button').click()
    
//         })
//         it('Step=1', () =>{
//             const img = "Book1.jpg"
               
//             cy.visit('https://testapp.kloudsoft.co/matrices/c00a6a56e9be0d77092913af67d67540eapp/steps/about')
//             cy.wait(2000)
//             cy.get('#matrix_name').type("selfAssessment")
//             cy.get('#tagline_text').type("working on project")
//             cy.get('.project_type-renderer > .btn').click()
//             cy.get("div[class='list'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) a:nth-child(1)").wait(2000).click()
//             cy.get('input[name="matrix[thumbnail_image]"]').attachFile(img);
//             cy.get(':nth-child(7) > .col-md-8 > .selectize-control > .selectize-input').type('Alternative')
//             cy.get('div[data-value="Full access"]').click()
//             cy.get('div.selectize-dropdown-content div').eq(1).click();
//             cy.get('.col-md-12 > .btn').click()
      
//             // .select('Partial access').should('have','Partial access')
//              } )

//              it('step=2', () =>{
//                 cy.visit('https://testapp.kloudsoft.co/matrices/83bf2a091f24e28d1f786aac8b02c0bdeapp/steps/meta_data')
//                 cy.get("div[class='category_id-renderer'] a[class='btn btn-default btn-sm']").click()
//                 cy.get("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)").click()
//                 cy.wait(2500)
//                 cy.get("div[class='category_domain-renderer'] a[class='btn btn-default btn-sm']").click()
//                 cy.wait(2500)
//                 cy.get("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)").click()
//                 cy.get('div.col-md-12 > trix-editor').type('Description')
//                 cy.get(':nth-child(6) > .col-md-8 > trix-editor').type('Business Impact')
//                 // cy.get(':nth-child(7) > .col-md-8 > trix-editor').type('values')
//                 cy.get('trix-editor[role="textbox"][input="values"]').type('value')
//                 // cy.get('div[class="col-md-12 col-sm-12 col-xs-12"] input[name="commit"]').click()
//                 cy.get('.col-md-12 > .btn').click()
//               })
             
//               it('step=3', () =>{
//                 const img = "Book2.jpg"
//                 const image = "book2.jpg"
//                 const image1 = "Book2.jpg"
       
//                 cy.visit('https://testapp.kloudsoft.co/matrices/83bf2a091f24e28d1f786aac8b02c0bdeapp/steps/base_page')
//                 cy.get('input[name="matrix[survey_title]"]').type('sorting card')
//                 cy.get('trix-editor').type('Introduction')
//                 cy.get('.trix-button--icon-italic').click()
//                 cy.get('.trix-button--icon-number-list').click()
//                 cy.get('input[name="matrix[logo]"]').attachFile(image);
//                 cy.get(':nth-child(5) > .col-md-6 > .selectize-control > .selectize-input').click()
       
//                 // cy.get('').select('Show Profile Logo').should('have.value','profile_logo').click()
       
//                 cy.get(':nth-child(7) > .col-md-6 > .selectize-control > .selectize-input').click()
//                 cy.get('input[name="matrix[banner]"]').attachFile(image1)
//                 cy.get('input[name="matrix[background_image]"]').attachFile(img)
//                 cy.get('.col-md-12 > .btn').click()
       
//              })
    
//              it('step=4', () => {
    
//                 cy.visit('https://testapp.kloudsoft.co/matrices/83bf2a091f24e28d1f786aac8b02c0bdeapp/steps/agreement')
//                 cy.get('#matrix_hide_agreement_checkbox').click()
//                 cy.get('trix-editor').type('Sometimes you may need to check if a user agrees with your licensing conditions. This needs to be conducted in a professional manner. Dt add your custom license agreement this will appear in terms and conditions link within a checkbox field')
//                 cy.get('.trix-button--icon-bold').click()
//                 cy.get('.col-md-12 > .btn').click()
       
//              })
//              it('step=5', () =>{
    
//                 cy.visit('https://testapp.kloudsoft.co/matrices/3f702d23791f2d531c29b92c85324981eapp/steps/setting')
//              //   cy.get('div[class="selectize-input items required has-options full has-items"]').click()
//                 cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
//                 cy.get('div.selectize-dropdown-content div').eq(3).click({force: true})
//                 cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
//                 cy.get('div.selectize-dropdown-content').eq(1).click()
//                 cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
//                 cy.get('div.selectize-dropdown-content').eq(2).click()
//                 // cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
//                 // cy.wait(3500)
//                 // cy.get('div.selectize-dropdown-content').eq(1).click()
//                 cy.get('#matrix_custom_current_comment_label').type('Current State Comment')
//                 cy.get('#matrix_submit_button_text').type(' matrix submit button text')
//                 cy.get("div[class='col-md-12 col-sm-12 col-xs-12'] input[value='Save and Continue']").click()
    
//              })

             it('step=6  ', () => {
                cy.visit('https://testapp.kloudsoft.co/matrices/c00a6a56e9be0d77092913af67d67540eapp/steps/setup')
                // cy.get(".btn.btn-primary.btn-lg.cat-new-question-sortable.new-block[data-remote='true']").click()
                // cy.wait(2000)
                // cy.get("div[class='row lgrids'] div:nth-child(3) div:nth-child(1) div:nth-child(2) div:nth-child(2) a:nth-child(2)").click()
                // cy.wait(1500)

                // Add question 1 in demographic

            //     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)").click()
            //     cy.wait(1500)
            //     cy.get("label[for='question_block_type_demographic']").click()
            //     cy.get("div[class='selectize-control form-control question_type single'] div[class='selectize-input items not-full has-options']").click()
            //     cy.get('div.selectize-dropdown-content div').eq(0).click()
            //     cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Whether the trainer answer the Questions')
            //     cy.get("trix-editor[role='textbox'][input='question_label']").type('Whether the trainer answer the Questions')
            //    //  cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Whether the trainer answer the Questions")
            //    //  cy.get(".selectize-input.items.required.has-options.full.has-items").click({force: true})
            //    // cy.get('#question_master_cat_id-selectized').click()
            //    // for sub category
            //    cy.get(':nth-child(14) > div.col-md-12 > .selectize-control').type('Self Confidence').eq(0)
            //    cy.contains('Self Confidence').click()
            //     // for category
            //    cy.get('#question_master_cat_id-selectized').type('Self Confidence').eq(0)
            //    cy.contains('Self Confidence').click()
            //    cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10',{force: true})
            //    cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
            //    // cy.get("div[class='selectize-input items not-full has-options']div[class='selectize-input items not-full has-options']").click()
            //    cy.get("input[value='Submit']").click()
            //    cy.wait(1500)

            // //   // Add question 2 in demographic
            // cy.get('[href="/matrices/c00a6a56e9be0d77092913af67d67540eapp/questions/new?category_id=262c94ebf9f11d9ec113b12377d453f2eapp"]').click()
            //     cy.wait(1500)
            //     cy.get("label[for='question_block_type_demographic']").click({force: true})
            //     cy.get("div[class='selectize-control form-control question_type single'] div[class='selectize-input items not-full has-options']").click()
            //     cy.get('div.selectize-dropdown-content div').eq(1).click()
            //     cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Time management for the Framework')
            //     cy.get("trix-editor[role='textbox'][input='question_label']").type('Time management for the Framework')
            //    //  cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Time management for the Framework")
            //    cy.get(':nth-child(14) > div.col-md-12 > .selectize-control').type('Commanding').eq(0)
            //    cy.contains('Commanding').click({force: true})
            //     cy.get('#question_master_cat_id-selectized').type('Focus',{force: true}).eq(0)
            //     cy.contains('Focus').click( {force: true})
            //    cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
            //    cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
            //    cy.get("input[value='Submit']").click({force: true})

           // Add question 3 in demographic
               cy.wait(3500)
               cy.get('[href="/matrices/c00a6a56e9be0d77092913af67d67540eapp/questions/new?category_id=262c94ebf9f11d9ec113b12377d453f2eapp"]').click({force: true})
                cy.wait(1500)
                cy.get("label[for='question_block_type_demographic']").click()
                cy.get('[for="question_block_type_demographic"]').click()
                cy.get('div.selectize-dropdown-content').eq(2).click({force: true})
               //  cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('we would appreciate your valuable opinion.')
               //  cy.get("trix-editor[role='textbox'][input='question_label']").type('we would appreciate your valuable opinion.')
               // //  cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("we would appreciate your valuable opinion.")
               // cy.get(':nth-child(14) > div.col-md-12 > .selectize-control').type('Technology Advancement').eq(0)
               // cy.contains('Technology Advancement').click()
               //  cy.get('#question_master_cat_id-selectized').type('Technology Advancement',{force: true}).eq(0)
               // cy.contains('Technology Advancement').click( {force: true})
               // cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
               // cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
               // cy.get("input[value='Submit']").click({force: true})

         //       // Add question 4 in demographic

         //       cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //       cy.wait(1500)
         //       cy.get("label[for='question_block_type_demographic']").click({force: true})
         //       cy.get('[for="question_block_type_demographic"]').click({force: true})
         //       cy.get('div.selectize-dropdown-content div').eq(3).click({force: true})
         //       cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('You think it was right?')
         //       cy.get("trix-editor[role='textbox'][input='question_label']").type('You think it was right?')
         //       cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("You think it was right?")
         //       cy.get('#question_master_cat_id-selectized').type('Buyer Power',{force: true}).eq(0)
         //      cy.contains('Buyer Power').click( {force: true})
         //    //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //    //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //      cy.get("input[value='Submit']").click({force: true})

         // //     // Add question 5 in demographic

         //      cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //       cy.wait(1500)
         //       cy.get("label[for='question_block_type_demographic']").click({force: true})
         //       cy.get('[for="question_block_type_demographic"]').click({force: true})
         //       cy.get('div.selectize-dropdown-content div').eq(4).click({force: true})
         //       cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('respond to this video with another video')
         //       cy.get("trix-editor[role='textbox'][input='question_label']").type('respond to this video with another video')
         //       cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("respond to this video with another video")
         //       cy.get('#question_master_cat_id-selectized').type('Framework2 Maturity Category',{force: true}).eq(0)
         //      cy.contains('Framework2 Maturity Category').click( {force: true})
         //    //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //    //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //      cy.get("input[value='Submit']").click({force: true})

         //        // Add question 6 in demographic

         //        cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //       cy.wait(1500)
         //       cy.get("label[for='question_block_type_demographic']").click({force: true})
         //       cy.get('[for="question_block_type_demographic"]').click({force: true})
         //       cy.get('div.selectize-dropdown-content div').eq(5).click({force: true})
         //       cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Rate this platform')
         //       cy.get("trix-editor[role='textbox'][input='question_label']").type('Rate this platform')
         //       cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Rate this platform")
         //       cy.get('#question_master_cat_id-selectized').type('Additional',{force: true}).eq(0)
         //      cy.contains('Additional').click( {force: true})
         //    //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //    //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //      cy.get("input[value='Submit']").click({force: true})

         //      // Add question 7 in demographic

         //      cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //      cy.wait(1500)
         //      cy.get("label[for='question_block_type_demographic']").click({force: true})
         //      cy.get('[for="question_block_type_demographic"]').click({force: true})
         //      cy.get('div.selectize-dropdown-content div').eq(6).click({force: true})
         //      cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('this is for rich text type label')
         //      cy.get("trix-editor[role='textbox'][input='question_label']").type('this is for rich text type label')
         //      cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("this is for rich text type label")
         //      cy.get('#question_master_cat_id-selectized').type('Print Media',{force: true}).eq(0)
         //     cy.contains('Print Media').click( {force: true})
         //   //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //   //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //     cy.get("input[value='Submit']").click({force: true})


         //      // Add question 8 in demographic

         //      cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //      cy.wait(1500)
         //      cy.get("label[for='question_block_type_demographic']").click({force: true})
         //      cy.get('[for="question_block_type_demographic"]').click({force: true})
         //      cy.get('div.selectize-dropdown-content div').eq(7).click({force: true})
         //      cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Enter a communication port(email field)')
         //      cy.get("trix-editor[role='textbox'][input='question_label']").type('Enter a communication port(email field)')
         //      cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Enter a communication port(email field)")
         //      cy.get('#question_master_cat_id-selectized').type('Awareness',{force: true}).eq(0)
         //     cy.contains('Awareness').click( {force: true})
         //   //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //   //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //     cy.get("input[value='Submit']").click({force: true})

         //          // Add question 9 in demographic

         //          cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //          cy.wait(1500)
         //          cy.get("label[for='question_block_type_demographic']").click({force: true})
         //          cy.get('[for="question_block_type_demographic"]').click({force: true})
         //          cy.get('div.selectize-dropdown-content div').eq(8).click({force: true})
         //          cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Asking for help does not interrupt user progress?')
         //          cy.get("trix-editor[role='textbox'][input='question_label']").type('Asking for help does not interrupt user progress?')
         //          cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Asking for help does not interrupt user progress?")
         //          cy.get('#question_master_cat_id-selectized').type('External',{force: true}).eq(0)
         //         cy.contains('External').click( {force: true})
         //       //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //       //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //         cy.get("input[value='Submit']").click({force: true})

         //       //    // Add question 9 in demographic

         //          cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //          cy.wait(1500)
         //          cy.get("label[for='question_block_type_demographic']").click({force: true})
         //          cy.get('[for="question_block_type_demographic"]').click({force: true})
         //          cy.get('div.selectize-dropdown-content div').eq(9).click({force: true})
         //          cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('View Screen capture upload')
         //          cy.get("trix-editor[role='textbox'][input='question_label']").type('View Screen capture upload')
         //          cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("View Screen capture upload")
         //          cy.get('#question_master_cat_id-selectized').type('Skills',{force: true}).eq(0)
         //         cy.contains('Skills').click( {force: true})
         //       //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //       //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //         cy.get("input[value='Submit']").click({force: true})

         //         // Add question 10 in demographic

         //         cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //         cy.wait(1500)
         //         cy.get("label[for='question_block_type_demographic']").click({force: true})
         //         cy.get('[for="question_block_type_demographic"]').click({force: true})
         //         cy.get('div.selectize-dropdown-content div').eq(9).click({force: true})
         //         cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Novelty is a factor of profitability ?')
         //         cy.get("trix-editor[role='textbox'][input='question_label']").type('Novelty is a factor of profitability ?')
         //         cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Novelty is a factor of profitability ?")
         //         cy.get('#question_master_cat_id-selectized').type('Analytical',{force: true}).eq(0)
         //        cy.contains('Analytical').click( {force: true})
         //      //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //      //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //        cy.get("input[value='Submit']").click({force: true})


         //         // Add question 11 in demographic

         //         cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
         //         cy.wait(1500)
         //         cy.get("label[for='question_block_type_demographic']").click({force: true})
         //         cy.get('[for="question_block_type_demographic"]').click({force: true})
         //         cy.get('div.selectize-dropdown-content div').eq(10).click({force: true})
         //         cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('App to test rich text label')
         //         cy.get("trix-editor[role='textbox'][input='question_label']").type('App to test rich text label')
         //         cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("App to test rich text label")
         //         cy.get('#question_master_cat_id-selectized').type('Flexibility',{force: true}).eq(0)
         //        cy.contains('Flexibility').click( {force: true})
         //      //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
         //      //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
         //        cy.get("input[value='Submit']").click({force: true})

                // Add question 12 in demographic

            //     cy.get("div[class='question-btn ui-sortable-handle'] a[class='btn btn-primary btn-lg cat-new-question-sortable']").click({force: true})
            //     cy.wait(1500)
            //     cy.get("label[for='question_block_type_demographic']").click({force: true})
            //     cy.get('[for="question_block_type_demographic"]').click({force: true})
            //     cy.get('div.selectize-dropdown-content div').eq(11).click({force: true})
            //     cy.get(".form-control.autocomplete_from_master_questions.question-body-search").type('Facts and data are important to me')
            //     cy.get("trix-editor[role='textbox'][input='question_label']").type('Facts and data are important to me')
            //     cy.get("trix-editor[role='textbox'][input='question_tooltip']").type("Facts and data are important to me")
            //     cy.get('#question_master_cat_id-selectized').type('Internal',{force: true}).eq(0)
            //    cy.contains('Internal').click( {force: true})
            //  //   cy.get("textarea[class='form-control self-assessment-fields choices-fields']").type('10')
            //  //   cy.get("#question_ques_cus_lovs_attributes_0_score").type('5')
            //    cy.get("input[value='Submit']").click({force: true})


               //  cy.get("div[class='col-md-offset-1 col-md-12 col-sm-12 col-xs-12'] input[value='Save and Exit']").click({force: true})
             })




            // })        