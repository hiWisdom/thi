//import react LINK
import { Link } from "react-router-dom";
import Services from "../components/Services";
import BasicSlider from '../components/BasicSlider';

//homepage
export const Home = () => {


  return (

  
    <main>


    
    <div className="c_about_us_container">

        <div className="c_about_us c_about_us_A">

            <div>

                <h2 data-aos="zoom-in-out">
                    <b>Ready To Speak</b> <br/> With A Doctor?
                </h2>


                <div className="c_contact_action c_contact_action_A">
                   <div>
                        <Link to="/contact"> CONTACT US </Link>

                   </div>
                </div>

                    <br/>

                <div className="c_contact_action c_contact_action_B">

                    <div className="c_contact_actionB_container">
                    
                        <div className="c_contact_action_container" id="norms">
                        
                    
                            <div className="c_contact_action_B_container">
                            
                                    <div className="c_contact_action_items" id="c_contact_action_items1">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="none" viewBox="0 0 48 48" id="whatsapp"><path fill="#fff" d="M3.54517 44.0862L6.39933 33.665C4.63898 30.6153 3.71284 27.1552 3.71397 23.6108C3.71848 12.5219 12.7426 3.50049 23.8318 3.50049C29.2131 3.50311 34.2639 5.59731 38.0627 9.39872C41.8603 13.2001 43.9515 18.2529 43.9496 23.627C43.9447 34.7151 34.9191 43.738 23.8318 43.738C23.831 43.738 23.8326 43.738 23.8318 43.738H23.8231C20.4565 43.7367 17.1483 42.8921 14.2098 41.2897L3.54517 44.0862Z"></path><path fill="url(#paint0_linear_147648_1354)" d="M23.8382 6.89758C14.6149 6.89758 7.11411 14.3956 7.11072 23.6118C7.10935 26.7701 7.9932 29.8462 9.66689 32.5078L10.0648 33.1401L8.37517 39.3081L14.7038 37.6487L15.3149 38.0108C17.8816 39.5342 20.8243 40.3397 23.8254 40.3412H23.8317C33.048 40.3412 40.5487 32.8424 40.5525 23.6254C40.5541 19.159 38.8167 14.9589 35.6596 11.7995C32.5025 8.64018 28.3047 6.89947 23.8382 6.89758Z"></path><path fill="#fff" fillRule="evenodd" d="M18.8039 15.2031C18.4272 14.3663 18.0308 14.3493 17.6728 14.3346C17.3797 14.3222 17.0444 14.3229 16.7094 14.3229C16.374 14.3229 15.8296 14.4488 15.3692 14.9518C14.9083 15.4548 13.6096 16.6707 13.6096 19.1439C13.6096 21.6172 15.411 24.0068 15.6619 24.3425C15.9132 24.6778 19.1393 29.9152 24.2489 31.9299C28.4949 33.6043 29.3589 33.2712 30.2809 33.1876C31.2025 33.1039 33.2549 31.9717 33.6735 30.798C34.0925 29.6243 34.0925 28.6186 33.967 28.4084C33.8411 28.1985 33.5062 28.0731 33.0032 27.8217C32.5005 27.5704 30.0292 26.3542 29.5684 26.1865C29.1076 26.0188 28.7726 25.9352 28.4373 26.4382C28.1023 26.9412 27.1396 28.0731 26.8461 28.4084C26.553 28.7441 26.2598 28.7859 25.7568 28.5346C25.2542 28.2826 23.6351 27.7524 21.7146 26.0399C20.2203 24.7076 19.2116 23.0622 18.9181 22.5591C18.625 22.0561 18.8868 21.7841 19.1389 21.5335C19.3646 21.3082 19.6415 20.9465 19.8932 20.653C20.1438 20.3595 20.2278 20.15 20.3951 19.815C20.5628 19.4793 20.4791 19.1858 20.3533 18.9344C20.2278 18.6831 19.2508 16.1971 18.8039 15.2031" clipRule="evenodd"></path><defs><linearGradient id="paint0_linear_147648_1354" x1="23.491" x2="23.661" y1="8.905" y2="37.484" gradientUnits="userSpaceOnUse"><stop stopColor="#57D163"></stop><stop offset="1" stopColor="#23B33A"></stop></linearGradient></defs></svg>
                                    </div>


                                    <div className="c_contact_action_items" id="c_contact_action_items2">
                                        <a className="c_contact_action_items_detail" href="https://wa.me/+23408035768694?text=hi" target="_blank">Whatsapp</a>
                                    </div>

                            </div>


                        </div>
                        
                        <div className="c_contact_action_container" id="norms">
                        
                    
                            <div className="c_contact_action_B_container">
                            
                                    <div className="c_contact_action_items" id="c_contact_action_items1">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="none" viewBox="0 0 48 48" id="instagram"><path fill="url(#paint0_radial_147648_827)" d="M24.0018 0C17.4837 0 16.6657 0.0285005 14.1056 0.145C11.5506 0.262 9.8066 0.6665 8.28059 1.26C6.70207 1.873 5.36306 2.693 4.02904 4.0275C2.69403 5.3615 1.87402 6.7005 1.25901 8.2785C0.664007 9.805 0.259003 11.5495 0.144002 14.1035C0.0300004 16.6635 0 17.482 0 24C0 30.518 0.0290008 31.3335 0.145002 33.8935C0.262503 36.4485 0.667007 38.1925 1.26001 39.7185C1.87352 41.297 2.69353 42.636 4.02804 43.97C5.36156 45.305 6.70057 46.127 8.27809 46.74C9.8051 47.3335 11.5496 47.738 14.1041 47.855C16.6642 47.9715 17.4817 48 23.9993 48C30.5178 48 31.3333 47.9715 33.8934 47.855C36.4484 47.738 38.1944 47.3335 39.7214 46.74C41.2994 46.127 42.6364 45.305 43.97 43.97C45.305 42.636 46.125 41.297 46.74 39.719C47.33 38.1925 47.735 36.448 47.855 33.894C47.97 31.334 48 30.518 48 24C48 17.482 47.97 16.664 47.855 14.104C47.735 11.549 47.33 9.805 46.74 8.279C46.125 6.7005 45.305 5.3615 43.97 4.0275C42.6349 2.6925 41.2999 1.8725 39.7199 1.26C38.1899 0.6665 36.4449 0.262 33.8899 0.145C31.3298 0.0285005 30.5148 0 23.9947 0H24.0018ZM21.8487 4.325C22.4877 4.324 23.2007 4.325 24.0018 4.325C30.4098 4.325 31.1693 4.348 33.6999 4.463C36.0399 4.57 37.3099 4.961 38.1559 5.2895C39.2759 5.7245 40.0744 6.2445 40.9139 7.0845C41.7539 7.9245 42.2739 8.7245 42.7099 9.8445C43.0385 10.6895 43.43 11.9595 43.5365 14.2995C43.6515 16.8295 43.6765 17.5895 43.6765 23.9945C43.6765 30.3995 43.6515 31.1595 43.5365 33.6895C43.4295 36.0295 43.0385 37.2995 42.7099 38.1445C42.2749 39.2645 41.7539 40.062 40.9139 40.9015C40.0739 41.7415 39.2764 42.2615 38.1559 42.6965C37.3109 43.0265 36.0399 43.4165 33.6999 43.5235C31.1698 43.6385 30.4098 43.6635 24.0018 43.6635C17.5932 43.6635 16.8337 43.6385 14.3036 43.5235C11.9636 43.4155 10.6936 43.0245 9.8471 42.696C8.72709 42.261 7.92708 41.741 7.08707 40.901C6.24707 40.061 5.72706 39.263 5.29106 38.1425C4.96255 37.2975 4.57105 36.0275 4.46455 33.6875C4.34955 31.1575 4.32655 30.3975 4.32655 23.9885C4.32655 17.5795 4.34955 16.8235 4.46455 14.2935C4.57155 11.9535 4.96255 10.6835 5.29106 9.8375C5.72606 8.7175 6.24707 7.9175 7.08707 7.0775C7.92708 6.2375 8.72709 5.7175 9.8471 5.2815C10.6931 4.9515 11.9636 4.5615 14.3036 4.454C16.5177 4.354 17.3757 4.324 21.8487 4.319V4.325Z"></path><path fill="url(#paint1_radial_147648_827)" d="M36.7613 8.25105C36.1916 8.25105 35.6348 8.41998 35.1611 8.73648C34.6875 9.05299 34.3183 9.50284 34.1004 10.0291C33.8824 10.5555 33.8254 11.1346 33.9367 11.6933C34.0479 12.252 34.3223 12.7651 34.7251 13.1679C35.128 13.5706 35.6413 13.8448 36.2 13.9558C36.7588 14.0668 37.3379 14.0097 37.8641 13.7915C38.3903 13.5734 38.8401 13.2041 39.1564 12.7304C39.4728 12.2566 39.6415 11.6997 39.6413 11.13C39.6413 9.54005 38.3513 8.25005 36.7613 8.25005V8.25105Z"></path><path fill="url(#paint2_radial_147648_827)" fillRule="evenodd" d="M23.9501 11.616C17.1436 11.616 11.625 17.1345 11.625 23.941C11.625 30.7475 17.1436 36.2635 23.9501 36.2635C30.7567 36.2635 36.2738 30.7475 36.2738 23.941C36.2738 17.1345 30.7567 11.616 23.9501 11.616ZM24 31.875C28.3493 31.875 31.875 28.3493 31.875 24C31.875 19.6508 28.3493 16.125 24 16.125C19.6508 16.125 16.125 19.6508 16.125 24C16.125 28.3493 19.6508 31.875 24 31.875Z" clipRule="evenodd"></path><path fill="url(#paint3_radial_147648_827)" d="M24.0018 0C17.4837 0 16.6657 0.0285005 14.1056 0.145C11.5506 0.262 9.8066 0.6665 8.28059 1.26C6.70207 1.873 5.36306 2.693 4.02904 4.0275C2.69403 5.3615 1.87402 6.7005 1.25901 8.2785C0.664007 9.805 0.259003 11.5495 0.144002 14.1035C0.0300004 16.6635 0 17.482 0 24C0 30.518 0.0290008 31.3335 0.145002 33.8935C0.262503 36.4485 0.667007 38.1925 1.26001 39.7185C1.87352 41.297 2.69353 42.636 4.02804 43.97C5.36156 45.305 6.70057 46.127 8.27809 46.74C9.8051 47.3335 11.5496 47.738 14.1041 47.855C16.6642 47.9715 17.4817 48 23.9993 48C30.5178 48 31.3333 47.9715 33.8934 47.855C36.4484 47.738 38.1944 47.3335 39.7214 46.74C41.2994 46.127 42.6364 45.305 43.97 43.97C45.305 42.636 46.125 41.297 46.74 39.719C47.33 38.1925 47.735 36.448 47.855 33.894C47.97 31.334 48 30.518 48 24C48 17.482 47.97 16.664 47.855 14.104C47.735 11.549 47.33 9.805 46.74 8.279C46.125 6.7005 45.305 5.3615 43.97 4.0275C42.6349 2.6925 41.2999 1.8725 39.7199 1.26C38.1899 0.6665 36.4449 0.262 33.8899 0.145C31.3298 0.0285005 30.5148 0 23.9947 0H24.0018ZM21.8487 4.325C22.4877 4.324 23.2007 4.325 24.0018 4.325C30.4098 4.325 31.1693 4.348 33.6999 4.463C36.0399 4.57 37.3099 4.961 38.1559 5.2895C39.2759 5.7245 40.0744 6.2445 40.9139 7.0845C41.7539 7.9245 42.2739 8.7245 42.7099 9.8445C43.0385 10.6895 43.43 11.9595 43.5365 14.2995C43.6515 16.8295 43.6765 17.5895 43.6765 23.9945C43.6765 30.3995 43.6515 31.1595 43.5365 33.6895C43.4295 36.0295 43.0385 37.2995 42.7099 38.1445C42.2749 39.2645 41.7539 40.062 40.9139 40.9015C40.0739 41.7415 39.2764 42.2615 38.1559 42.6965C37.3109 43.0265 36.0399 43.4165 33.6999 43.5235C31.1698 43.6385 30.4098 43.6635 24.0018 43.6635C17.5932 43.6635 16.8337 43.6385 14.3036 43.5235C11.9636 43.4155 10.6936 43.0245 9.8471 42.696C8.72709 42.261 7.92708 41.741 7.08707 40.901C6.24707 40.061 5.72706 39.263 5.29106 38.1425C4.96255 37.2975 4.57105 36.0275 4.46455 33.6875C4.34955 31.1575 4.32655 30.3975 4.32655 23.9885C4.32655 17.5795 4.34955 16.8235 4.46455 14.2935C4.57155 11.9535 4.96255 10.6835 5.29106 9.8375C5.72606 8.7175 6.24707 7.9175 7.08707 7.0775C7.92708 6.2375 8.72709 5.7175 9.8471 5.2815C10.6931 4.9515 11.9636 4.5615 14.3036 4.454C16.5177 4.354 17.3757 4.324 21.8487 4.319V4.325Z"></path><path fill="url(#paint4_radial_147648_827)" d="M36.7613 8.25105C36.1916 8.25105 35.6348 8.41998 35.1611 8.73648C34.6875 9.05299 34.3183 9.50284 34.1004 10.0291C33.8824 10.5555 33.8254 11.1346 33.9367 11.6933C34.0479 12.252 34.3223 12.7651 34.7251 13.1679C35.128 13.5706 35.6413 13.8448 36.2 13.9558C36.7588 14.0668 37.3379 14.0097 37.8641 13.7915C38.3903 13.5734 38.8401 13.2041 39.1564 12.7304C39.4728 12.2566 39.6415 11.6997 39.6413 11.13C39.6413 9.54005 38.3513 8.25005 36.7613 8.25005V8.25105Z"></path><path fill="url(#paint5_radial_147648_827)" fillRule="evenodd" d="M23.9501 11.616C17.1436 11.616 11.625 17.1345 11.625 23.941C11.625 30.7475 17.1436 36.2635 23.9501 36.2635C30.7567 36.2635 36.2738 30.7475 36.2738 23.941C36.2738 17.1345 30.7567 11.616 23.9501 11.616ZM24 31.875C28.3493 31.875 31.875 28.3493 31.875 24C31.875 19.6508 28.3493 16.125 24 16.125C19.6508 16.125 16.125 19.6508 16.125 24C16.125 28.3493 19.6508 31.875 24 31.875Z" clipRule="evenodd"></path><defs><radialGradient id="paint0_radial_147648_827" cx="0" cy="0" r="1" gradientTransform="matrix(0 -47.5715 44.2453 0 12.75 51.697)" gradientUnits="userSpaceOnUse"><stop stopColor="#FD5"></stop><stop offset=".1" stopColor="#FD5"></stop><stop offset=".5" stopColor="#FF543E"></stop><stop offset="1" stopColor="#C837AB"></stop></radialGradient><radialGradient id="paint1_radial_147648_827" cx="0" cy="0" r="1" gradientTransform="matrix(0 -47.5715 44.2453 0 12.75 51.697)" gradientUnits="userSpaceOnUse"><stop stopColor="#FD5"></stop><stop offset=".1" stopColor="#FD5"></stop><stop offset=".5" stopColor="#FF543E"></stop><stop offset="1" stopColor="#C837AB"></stop></radialGradient><radialGradient id="paint2_radial_147648_827" cx="0" cy="0" r="1" gradientTransform="matrix(0 -47.5715 44.2453 0 12.75 51.697)" gradientUnits="userSpaceOnUse"><stop stopColor="#FD5"></stop><stop offset=".1" stopColor="#FD5"></stop><stop offset=".5" stopColor="#FF543E"></stop><stop offset="1" stopColor="#C837AB"></stop></radialGradient><radialGradient id="paint3_radial_147648_827" cx="0" cy="0" r="1" gradientTransform="matrix(4.17365 20.8511 -85.949 17.20395 -8.041 3.458)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771C8"></stop><stop offset=".128" stopColor="#3771C8"></stop><stop offset="1" stopColor="#60F" stopOpacity="0"></stop></radialGradient><radialGradient id="paint4_radial_147648_827" cx="0" cy="0" r="1" gradientTransform="matrix(4.17365 20.8511 -85.949 17.20395 -8.041 3.458)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771C8"></stop><stop offset=".128" stopColor="#3771C8"></stop><stop offset="1" stopColor="#60F" stopOpacity="0"></stop></radialGradient><radialGradient id="paint5_radial_147648_827" cx="0" cy="0" r="1" gradientTransform="matrix(4.17365 20.8511 -85.949 17.20395 -8.041 3.458)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771C8"></stop><stop offset=".128" stopColor="#3771C8"></stop><stop offset="1" stopColor="#60F" stopOpacity="0"></stop></radialGradient></defs></svg>
                                    </div>
    
    
                                    <div className="c_contact_action_items" id="c_contact_action_items2"><a className="c_contact_action_items_detail" href="https://www.linkedin.com/in/toyin-asaolu-5608a668/?originalSubdomain=ng">Instagram</a></div>
    
                            </div>


                        </div>
                        
                    </div>

                </div>

            </div>

        </div>

        <div className="c_about_us c_about_us_B">

            <div className="c_about_us_B_container">
                

                <div className="c_about_us_B_div_con">
                    <h2>We’re here to answer<br/> all your stomach <br/> questions ?</h2>
                        {/* <abbr id="smallestFont">Over-the-counter medications such as antacids or antidiarrheal drugs may also provide relief. Ensure to see a <a href="#">Gastroenterologist medicine specailist</a></abbr> */}
                </div>

                <div className="c_about_us_B_div_con">

                    {/* slide show */}

                    <BasicSlider />

                </div>

                
            </div>

            <div className="c_about_us_B_container">

            

                <div className="c_about_us_B_div_con">
                    <h2>Strategies to prevent<br/> stomach disease ?</h2>
                </div>

                <div className="c_about_us_B_div_con">
                    <h4>A stomach cramp is a sudden, tight feeling in the muscles of your belly. You need to be guided by your doctor, but there are some things you can do to help ease the pain, including:</h4>

                    <div className="c_about_us_B_div_con_h_list">

                        <div>
                            <ul>
                                <li>Place a hot water bottle or heated wheat bag on your abdomen.</li>
                                <li>Drink plenty of clear fluids such as water.</li>
                                <li>Reduce your intake of coffee, tea and alcohol as these can make the pain worse.</li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li>Avoiding greasy or spicy foods</li>
                                <li>getting plenty of rest, and avoiding tobacco and caffeine. </li>
                                <li>Eating small and frequent meals</li>
                            </ul>
                        </div>

                    </div>
            
                </div>
                
            </div>

        </div>

        <div className="c_about_what_we_do" data-aos="zoom-in-up">

            <h2>What we do</h2>


            
            <Services />


                




        </div>

        <div className="c_find_doctor">

            <div className="c_find_doctor_container">

                <div className="c_find_a_doctor_icon"><i className="fa-solid fa-notes-medical"></i></div> 

                <div className="c_find_a_doctor_title">
                    <div>
                        <p style={{color: "white"}}> LET'S TAKE CARE OF YOU </p>
                    </div>
                    <div>
                        <h1>Your bridge to quality health solution</h1>
                    </div>
                </div>

            </div>

        </div>

        <div className="c_find_a_doctor_btn_container">
            <button id="c_find_a_doctor_btn">FIND A DOCTOR</button>
        </div>

        <div className="c_appoinment_bmi_container">


            <div  className="c_appoinment_bmi c_appoinment_container">
                <h3><b>Q</b>uick <b>A</b>ppoinment <b>S</b>chedule</h3>
                
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

                <form className="bmi_form" id="bmi_form" 
                // onSubmit="return validateBMIForm()"
                >

                    <div className="bmi_row_one">
                    
                        <input type="text" className="bmi_text_input" id="bmi_age" autoComplete="off" required/><p className="bmi_text">Age</p>
                        
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
                    
                        <input type="text" className="bmi_text_input" id="bmi_height" autoComplete="off" required/><p className="bmi_text">Height (cm)</p>
                    
                        <input type="text" className="bmi_text_input" id="bmi_weight" autoComplete="off" required/><p className="bmi_text">Weight (kg)</p>
                    
                    </div>
                    
                    
                    
                    <div className="bmi_button_container">

                        <button type="button" className="bmi_button" id="submit">Submit</button>
                        <button type="reset" className="bmi_button" id="bmi_reset">Reset</button>

                    </div>
                    
                    
                    
                    
                    

                </form>

                <div id="c_bmi_result"></div>
            </div>



        </div>

        <div className="c_appoinment_bmi_container">

            <div  className="c_appoinment_bmi c_appoinment_container">
                <h3><b>T</b>rusted <b>B</b>y <b>M</b>ost <b>B</b>usiness <b>A</b>cross <b>N</b>igeria.</h3>


                <div className="c">

                    <ul id="c_testimonial_engage" className="cs-c_testimonial_engage">

                        <li className="item-a">

                            {/* box-slider */}

                            <div className="box">
                            
                            {/* img box */}
                            <div className="slide-img">
                                <img className="images-in-items" id="slide-img-1"/>
                            </div>
                            
                            </div>
                            
                        </li>

                        <li className="item-b">

                            {/* box-slider */}

                            <div className="box">
                            
                            {/* img box */}
                            <div className="slide-img">
                                <img className="images-in-items" id="slide-img-2"/>
                            </div>
                            
                            </div>
                            
                        </li>
                        
                        <li className="item-c">

                            {/* box-slider */}

                            <div className="box">
                            
                            {/* img box */}
                            <div className="slide-img">
                                <img className="images-in-items" id="slide-img-3"/>
                            </div>
                            
                            </div>
                        </li>
                    
                    
                    </ul>

                </div>



            </div>

            <div className="c_appoinment_bmi c_bmi_container">


                <h3><b>TESTIMONIALS</b></h3>
                <h3>What customers say about Timob Healthcare</h3>

                <div className="c_feedback_wrapper">
                
                    <div className="c_feedback_carousel">
                    
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Ting whale</p>
                                <p className="c_feedback_carousel__item-body-content">First time listing to Dr. Toyin from Timob health podcast, I learnt new ways to prevent gastro reflux, prevent hepatitis and eat healthy meals</p>
                            </div>
                    
                        </div>
                        
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Kunle Lawson</p>
                                <p className="c_feedback_carousel__item-body-content">Timob is a reliable platform for stomach care. I ask questions and get response asap. Thanks</p>
                            </div>
                    
                        </div>
                        
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Martins Owen</p>
                                <p className="c_feedback_carousel__item-body-content">At health summit 2022 I was recommended this platform for stomach pains and it has been helpful to me and my communities at large</p>
                            </div>
                    
                        </div>
                        
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://k2k4h6a6.stackpathcdn.com/wp-content/uploads/2022/01/logo.png" style={{width: "100%"}}/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Leadway Health Insurance</p>
                                <p className="c_feedback_carousel__item-body-content">My client uses timob for quick gastroenterology enquires.</p>
                            </div>
                    
                        </div>
                        
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Expat Focus</p>
                                <p className="c_feedback_carousel__item-body-content">Timob is the best stomach and liver treatment platform I will recommend worldwide, me and my customers problems have solutions here.</p>
                            </div>
                    
                        </div>
                        
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Spout Ing</p>
                                <p className="c_feedback_carousel__item-body-content">Timob recommend my stomach cleanser, it is work the time here.</p>
                            </div>
                    
                        </div>
                        
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Chukwuma Okoro</p>
                                <p className="c_feedback_carousel__item-body-content">First time visiting this platform, it was great and lots to learn from, Thanks for creating this community Timob.</p>
                            </div>
                    
                        </div>
                        
                        <div className="c_feedback_carousel__item">
                    
                            <div className="c_feedback_carousel__item-head">
                                <img className="c_feedback_carousel__item-image" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>
                            </div>
                            
                            <div className="c_feedback_carousel__item-body">
                                <p className="c_feedback_carousel__item-body-title">Ruth Morgan</p>
                                <p className="c_feedback_carousel__item-body-content">Timob Health always take it time to answer any questions I have. I recommend this reliable platform for anyone worldwide.</p>
                            </div>
                    
                        </div>
                        
                        
                    </div>
                
                </div>




            </div>

        </div>

    </div>


    <a id="c_back_to_top" className="c_back_to_top" href="#"><i className="fa fa-arrow-up c_back_to_top_icon"></i></a>

    
    




    

</main>
  
  );



};
