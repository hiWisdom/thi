

//contact page
export const Contact = () => {

  
  return (


    <>

<main>



<div className="c_page_title_background c_page_title_background_contactUs"> </div>


<div className="c_signin_platform">

    <h2>Contact us</h2>

    <p>
    Please give us as many details as possible so that we can get a rough idea of your request.
    </p> 


    <div className="c_create_an_account">



        <form method="POST" action="../php/c_thi_user_contact_us_form_submit.php"  enctype="multipart/form-data" className="c_signin_createanaccount">

            <div className="c_create_an_account_section c_create_an_account_section_one">
                <input type="text" placeholder="Enter Full Name" id="c_contact_form_name" className="c_create_an_account_inputs" name="c_contact_form_name"/>
                
                {/* <!--<label for="c_contact_form_name" className="c_create_an_account_accountName_label">Enter Full Name</label>--> */}
                
            </div>
            
                                        
            <br/>
            
            <div className="c_create_an_account_section c_create_an_account_section_four">
                <input type="tel" id="c_contact_form_tel" className="c_create_an_account_inputs" name="c_contact_form_tel" placeholder="Enter Telephone"/>
                
                {/* <!--<label for="c_contact_form_tel" className="c_create_an_account_accountPassword_label">Enter Telephone</label>--> */}
                                                        
                                                        
            </div>
            
            <br/>
            
            
            <div className="c_create_an_account_section c_create_an_account_section_four">
                <input type="email"  id="c_contact_form_email" className="c_create_an_account_inputs" name="c_contact_form_email" placeholder="Enter Email"/>
                
                {/* <!--<label for="c_contact_form_email" className="c_create_an_account_accountConfirmPassword">Enter Email</label>--> */}
                                                        
                                                        
            </div>
            
            <br/>
            
                <div className="c_form_item_row">

                    <textarea name="c_contact_form_message" className="c_contact_form_details" id="c_contact_form_message" required placeholder="Enter Message" value=""></textarea>

                </div>
            
            
            <br/>
            

            <div className="c_create_an_account_section c_create_an_account_section_five">
                <input type="submit" value="Submit" id="c_create_an_account_accountSubmit" className="c_create_an_account_inputs" name="create_user_account_submit"/>
            </div>
                
            <br/>



        </form>


    
    </div>
        
</div>


<a id="c_back_to_top" className="c_back_to_top" href="#"><i className="fa fa-arrow-up c_back_to_top_icon"></i></a>



</main>


    </>


  );


};
