

//contact page
export const Doctor = () => {

  
  return (


    <>

<main>


<div className="c_page_title_background c_page_title_background_requestAppoinment">  

</div>


<h1 className="find_doctor_Request_appoinment" data-aos="zoom-in-up">Find a doctor and Request a free and paid medical doctor appoinment</h1>







<div className="c_content">

<div className="c_content_title_header_container c_general_div">

<div className="c_general_container">

    <div className="c_general_two">

        <div className="c_appoinment_bmi_container">

            <div  className="c_appoinment_bmi c_appoinment_container find_your_doctor">
                <h3><i className="fa-solid fa-user-doctor"></i> Find your doctor</h3>
                
                
                <div className="find_your_doctor_container">
                    
                    <div className="find_your_doctor_department">
                        
                        <div className="find_your_doctor_department_text">
                            Select Department
                        </div>
                        
                        <div className="find_your_doctor_department_list">
                            <select>
                                <option>GASTROENTEROLOGY</option>
                                <option>CARDIOTHORACIC & VASCULAR SURGERY</option>
                            </select>
                        </div>
                        
                    </div>
                    
                    <div className="find_your_doctor_name">
                        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Doctor's Name"/>
                    </div>
                    
                    <div className="find_your_doctor_search">
                        <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                    
                    
                </div>
                

                                                    
                                                    

                    <table id="myTable">
                        
                    <tr className="header">
                        
                        <th style={{width:"40%"}}>List of Doctors</th>
                        <th style={{width:"60%"}}>Availability/Non Availability</th>
                    </tr>
                    
                    <tr>
                        
                        <td>
                        <ul id="myUL">
                            <li>
                                <div style={{color: "#7b9fc1", fontWeight: "bold"}}>DR. OLUTOYIN ASAOLU</div>
                            </li>
                        </ul> 
                        
                        <div style={{color: "#7b9fc1", fontWeight: "bold"}}>MBBS (INTERNAL MEDICINE), DM (GASTROENTEROLOGY)</div> 
                        
                        <div style={{border: "2px solid #fb6b5b", background: "#fb6b5b", color: "white", padding: "0.5%", width: "fit-content", borderRadius: "1.5%"}}>Fees NGN 10,000</div>
                        
                        </td>
                        
                        
                        
                        <td className="find_your_doctor_avalibility">
                            
                            <div className="find_your_doctor_avalibility_text"><i className="fa-solid fa-stethoscope"></i> <p>Wednesday</p> </div> 
                            
                            <div className="find_doctor_appoinment_time">From 10:00 AM to 1:00 PM</div> 
                            
                            <div className="find_doctor_make_appoinment"><button>Make Appoinment</button></div>
                            
                        </td>
                        
                                                            <td className="find_your_doctor_avalibility">
                            
                            <div className="find_your_doctor_avalibility_text"><i className="fa-solid fa-stethoscope"></i> <p>Saturday</p> </div> 
                            
                            <div className="find_doctor_appoinment_time">From 1:00 PM to 3:00 PM</div> 
                            
                            <div className="find_doctor_make_appoinment"><button>Make Appoinment</button></div>
                            
                        </td>
                        
                    </tr>
                    
                    
                    <tr>
                        
                        <td>
                        
                        <ul id="myUL">
                            <li>
                        <div style={{color: "#7b9fc1", fontWeight: "bold"}}>DR. JOHN DOE</div> 
                        </li>
                        </ul>
                        
                        <div style={{color: "#7b9fc1", fontWeight: "bold"}}>MBBS (General Doctor)</div> 
                        
                        <div style={{border: "2px solid #fb6b5b", background: "#fb6b5b", color: "white", padding: "0.5%", width: "fit-content", borderRadius: "1.5%"}}>Fees NGN 1,500</div>
                        
                        </td>
                        
                        
                        
                        <td className="find_your_doctor_avalibility">
                            
                            <div className="find_your_doctor_avalibility_text"><i className="fa-solid fa-stethoscope"></i> <p>Monday</p> </div> 
                            
                            <div className="find_doctor_appoinment_time">From 10:00 AM to 1:00 PM</div> 
                            
                            <div className="find_doctor_make_appoinment"><button>Make Appoinment</button></div>
                            
                        </td>
                        
                                                            <td className="find_your_doctor_avalibility">
                            
                            <div className="find_your_doctor_avalibility_text"><i className="fa-solid fa-stethoscope"></i> <p>Tuesday</p> </div> 
                            
                            <div className="find_doctor_appoinment_time">From 10:00 AM to 1:00 PM</div> 
                            
                            <div className="find_doctor_make_appoinment"><button>Make Appoinment</button></div>
                            
                        </td>
                        
                        
                                                            <td className="find_your_doctor_avalibility">
                            
                            <div className="find_your_doctor_avalibility_text"><i className="fa-solid fa-stethoscope"></i> <p>Wednesday</p> </div> 
                            
                            <div className="find_doctor_appoinment_time">From 10:00 AM to 1:00 PM</div> 
                            
                            <div className="find_doctor_make_appoinment"><button>Make Appoinment</button></div>
                            
                        </td>
                        
                                                            <td className="find_your_doctor_avalibility">
                            
                            <div className="find_your_doctor_avalibility_text"><i className="fa-solid fa-stethoscope"></i> <p>Friday</p> </div> 
                            
                            <div className="find_doctor_appoinment_time">From 1:00 PM to 3:00 PM</div> 
                            
                            <div className="find_doctor_make_appoinment"><button>Make Appoinment</button></div>
                            
                        </td>
                        
                    </tr>
                    
                    
                    
                    </table>

            </div>

            <div className="c_appoinment_bmi c_bmi_container">
                <h3><b>C</b>alculator <b>Y</b>our <b>B</b>ody <b>M</b>ass <b>I</b>ndex</h3>

                <form className="bmi_form" id="bmi_form" onsubmit="return validateBMIForm()">

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

    </div>
    
    
    <br/>
    <br/>
    <br/>
    
    
    
    <div className="c_general_two">

        <div className="c_appoinment_bmi_container">

            <div  className="c_appoinment_bmi c_appoinment_container">
                <h3><b>D</b>octor <b>A</b>ppoinment <b>S</b>chedule</h3>
                
                <form>

                    <input type="text" className="c_quick_appoinment_input" name="#" placeholder="Your Name" required/>

                    <br/>
                    <input type="email" className="c_quick_appoinment_input"  name="#" placeholder="Your Email" required/>

                    <br/>
                    <input type="tel" className="c_quick_appoinment_input"  name="#" placeholder="Your Telephone Number" required/>

                    <br/>
                    <input type="date" className="c_quick_appoinment_input"  name="#" placeholder="date" required/>

                    <br/>

                    <div className="c_quick_appoinment_dropdown_container">

                        <select className="c_quick_appoinment_dropdown">
                            <option>Select Procedures</option>
                            <option>Gastroenterologist Consultation</option>
                            <option>Liver Specialist Consultation</option>
                            <option>Hepatitis B & C Screening</option>
                            <option>Colonoscopy Procedures</option>
                            <option>Gastrosocpy Procedures</option>
                        </select>

                        <div className="c_quick_appoinment_dropdown_icon_container">
                            <i className="fa-solid fa-caret-down"></i>
                        </div>

                    </div>


                    <br/>
                    
                    <div className="c_quick_appoinment_dropdown_container">

                        <select className="c_quick_appoinment_dropdown">
                            <option>Preferred Clinic Location</option>
                            <option>Virtual Consultation</option>
                            <option>Physical Consultation</option>
                        </select>

                        <div className="c_quick_appoinment_dropdown_icon_container">
                            <i className="fa-solid fa-caret-down"></i>
                        </div>

                    </div>

                    <br/>
                    <button type="submit" id="c_quick_appoinment_btn">Book Now</button>

                </form>

            </div>

            <div className="c_appoinment_bmi c_bmi_container">
                <h3><b>C</b>alculator <b>Y</b>our <b>B</b>ody <b>M</b>ass <b>I</b>ndex</h3>

                <form className="bmi_form" id="bmi_form" onsubmit="return validateBMIForm()">

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

    </div>
    
    
    
    
    
    
    
    
    
    
    
    

</div>

</div>

</div>















<a id="c_back_to_top" className="c_back_to_top" href="https://www.timobhealthinternational.org"><i className="fa fa-arrow-up c_back_to_top_icon"></i></a>




</main>


    </>


  );


};
