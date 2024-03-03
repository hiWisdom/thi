

import "../css/pages_css/C_general_pages_styling.css";
import Bmi from '../components/BMI-App - Copy';

// import Sidebar from '../components/Sidebar';

//BMI page
export const BMI = () => {

  
  return (


    <>

<main>


                        

{/* <Sidebar /> */}


<div className="c_page_title_background c_page_title_background_bmi"></div>

            
<h1 className="find_doctor_Request_appoinment" data-aos="zoom-in-up">Check your Body Mass Index quickly for free .....<small>stay healthy and live long</small></h1>



<Bmi/>

        <div className="bmi-hint">
            
            
            <h2>What your BMI means</h2>
            <p>
                To understand what your BMI means, it's useful to take a step back and understand what it's measuring and why it's measured.
                
                BMI is a calculation of your size that takes into account your height and weight. A number of years ago, I remember using charts that asked you to find your height along the left side and then slide your finger to the right to see your "ideal weight" from choices listed under small, medium, or large "frame" sizes.
                
                These charts came from actuarial statistics, calculations that life insurance companies use to determine your likelihood of reaching an advanced age based on data from thousands of people. These charts were cumbersome to use, and it was never clear how one was to decide a person's "frame size."
                
                BMI does something similar: it expresses the relationship between your height and weight as a single number that is not dependent on frame size. Although the origin of the BMI is over 200 years old, it is fairly new as a measure of health.
            </p>

        </div>

    

{/* <div className="c_content">

    <div className="c_content_title_header_container c_general_div">

        <div className="c_general_container">

            <div className="c_general_two c_general_two_BMI">


            <div className="c_appoinment_bmi_container">
    

                <div className="c_appoinment_bmi c_bmi_container">
                    <h3><b>B</b>ody <b>M</b>ass <b>I</b>ndex <b>C</b>heck</h3>

                    <form className="bmi_form" id="bmi_form" onSubmit="return validateBMIForm()">

                        <div className="bmi_row_one">
                        
                            <input type="text" className="bmi_text_input" id="bmi_age" autocomplete="off" required/><p className="bmi_text">Age</p>
                            
                            <label className="bmi_container">
                            <input type="radio" name="bmi_radio" id="bmi_female"/><p className="text">Female</p>
                            <span className="bmi_checkmark"></span>
                            </label>
                            
                            <label className="bmi_container">
                            <input type="radio" name="bmi_radio" id="bmi_male"/><p className="text">Male</p>
                            <span className="bmi_checkmark"></span>
                            </label>
                            
                        </div>
                        
                        
                        <div className="bmi_row_two">
                        
                            <input type="text" className="bmi_text_input" id="bmi_height" autocomplete="off" required/><p className="bmi_text">Height (cm)</p>
                        
                            <input type="text" className="bmi_text_input" id="bmi_weight" autocomplete="off" required/><p className="bmi_text">Weight (kg)</p>
                        
                        </div>
                        
                        
                        
                        <div className="bmi_button_container">

                            <button type="button" className="bmi_button" id="submit">Submit</button>
                            <button type="reset" className="bmi_button" id="bmi_reset">Reset</button>

                        </div>
                        
                        
                        
                        
                        

                    </form>

                    <div id="c_bmi_result"></div>
                </div>



            </div>
            
            
                <h2>What your BMI means</h2>
                <p>
                    To understand what your BMI means, it's useful to take a step back and understand what it's measuring and why it's measured.
                    
                    BMI is a calculation of your size that takes into account your height and weight. A number of years ago, I remember using charts that asked you to find your height along the left side and then slide your finger to the right to see your "ideal weight" from choices listed under small, medium, or large "frame" sizes.
                    
                    These charts came from actuarial statistics, calculations that life insurance companies use to determine your likelihood of reaching an advanced age based on data from thousands of people. These charts were cumbersome to use, and it was never clear how one was to decide a person's "frame size."
                    
                    BMI does something similar: it expresses the relationship between your height and weight as a single number that is not dependent on frame size. Although the origin of the BMI is over 200 years old, it is fairly new as a measure of health.
                </p>

            </div>

        </div>


    </div>



</div> */}

<a id="c_back_to_top" className="c_back_to_top" href="https://www.timobhealthinternational.org"><i className="fa fa-arrow-up c_back_to_top_icon"></i></a>



</main>

    </>


  );


};
