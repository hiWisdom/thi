

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {

  return (


    <>
    
    
    <footer className="footer">
        <div className="writing_animation_container" data-aos="zoom-in-up" data-aos-duration="3000">
            
            <span className="writing-animation-text first_text">Our Communities</span>

            <div className="writing-animation-container">    
                {/* <!-- <span className="writing-animation-text second_text">We are changing </span>  --> */}
                <span className="writing-animation-text second_text"></span>
            </div>

        </div>


        <div className="main_block main6">




            <div className="main6_Title" data-aos="fade-up" data-aos-duration="3000">

                    <p style={{color: "white", fontWeight: "700"}}>We are Inventing Brilliant Gastro Healthcare Initiatives</p>

                    <ul>
                        <li> <a href="https://www.timobhealthinternational.org" style={{color: 'white'}}>the Hepatitis Corner</a></li>
                        <li> <a href="https://www.timobhealthinternational.org" style={{color: 'white'}}>the Liver Healthcare Center</a></li>
                    </ul>

            </div>

            <div className="main6_body">

                <div className="main6_box main6_box1">

                    <div className="main6_box_content_container">

                        <div className="main6_box_content_title">

                            <p className="main6_box_content_titleB main6_box_content_titleB_special"> LATEST NEWS & ARTICLES FROM TIMOB BLOG</p>
                            
                                
                        </div>

                        <div className="main6_box_content">

                            <div className="c_about_what_we_do_con">
                    
                                <ul id="mediaSlide" className="cs-mediaSlide" style={{zIndex: "-1"}}>
                        
                                    <li className="item-a c_about_what_we_do_items">
                                    
                                        <div className="c_about_what_we_do_container">
                        
                                            <div>
                                                
                        
                                            <div className="c_about_what_we_do_IMG">

                                                <div className="c_latest_stories_category">
                                                    <p>#Category</p>
                                                </div>

                                                <img id="c_about_what_we_do_IMG_1" src="https://patient-staging.gastro.org/wp-content/uploads/2021/07/Patient-Ed-2019-Colonoscopy.jpg"style={{border: "0px solid gold", height: "390px"}} alt="imageofko"/>
                                            </div>

                                            <div style={{fontSize: "medium", fontWeight: "900"}}>

                                                <p style={{fontSize: "large"}}>
                                                    Colonoscopy Procedure
                                                </p>

                                                <p style={{fontSize: "small"}}><i className="fa-solid fa-user-tie"></i> BY: Dr. Kiki <i className="fa-regular fa-clock"></i> MAR 23, 2021 </p>

                                                <p>A colonoscopy is a procedure that lets your health care...</p>

                                                <button>Read more</button>

                                            </div>
                        
                                            </div>
                        
                        
                                        </div>
                                        
                                    </li>

                                    
                                    
                                </ul>
            
                            </div>
                        </div>

                    </div>

                </div>

                <div className="main6_box main6_box2">

                    <div className="main6_box_content_container">

                        <div className="main6_box_content_title">
                            
                            <p className="main6_box_content_titleB main6_box_content_titleB_special">OUR COMMUNITY HEALTH OUTREACH</p>

                        </div>

                        <div className="main6_box_content">


                            <div className="c_main_0_A" id="c_main_0_A_B" data-aos="zoom-in-right" data-aos-duration="3000">


                            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                            <div className="elfsight-app-f068aa06-e3e0-4606-8b5c-d53d41b43198" data-elfsight-app-lazy></div>

                            </div>


                        </div>



                        

                    </div>

                </div>


                <div className="main6_box main6_box3">

                    <div className="main6_box_content_container">

                        <div className="main6_box_content_title">
                            
                            <p className="main6_box_content_titleB">OUR HEPATITIS CORNER</p>

                            <p className="main6_box_content_titleA">Hepatitis means inflammation of the liver. The liver is a vital organ that processes nutrients, filters the blood, and fights infections. When the liver is inflamed or damaged, its function can be affected. Heavy alcohol use, toxins, some medications, and certain medical conditions can cause hepatitis.</p>
                            

                        </div>

                        <div className="main6_box_content">


                            <div style={{display: "block", width: "100%"}}>


                                <div className="c_main_0_A_iframe_contains">
                                    <iframe width=" 100%" height="100%" src="https://www.youtube.com/embed/XYE9t1fpYO8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>

                                <div>
                                    <p style={{color:"white", fontSize: "small"}}>#PublichealthinrealLife #worldhepatitisday #Hepatitistreatmentanddiagnosis<br/>World Hepatitis Day 2022 | Bringing hepatitis care closer to you | Dr. Toyin Asaolu</p>
                                    
                                    {/* <!-----post like function----> */}
{/*                                                             
                                    <!-- <div className="col-auto flex-shrink-1 flex-grow-1">
                                        <a href="index.php?post_id=" className="text-decoration-none text-reset me-3"><i className="far fa-thumbs-up"></i></a>
                                        <span className="fw-bolder"> Like</span>
                                    </div> --> */}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                

                <div className="main6_box main6_box4">

                    <div className="main6_box_content_container">

                        <div className="main6_box_content_title">
                            
                            <p className="main6_box_content_titleB">OUR HEALTH JOURNEY SO FAR</p>
                            <button className="HEALTH_JOURNEY_accordion">Our Journey so far with Dr. Olutoyin Asaolu</button>

                            <div className="HEALTH_JOURNEY_panel">

                                <div>
                                        <img src="<?= ROOT_URL ?>pictures/testing picture/Dr.-Olutoyin-Asaolu-e1598141460833.png" alt="imageofvo"/>
                                </div>

                                <h3>Dr. Olutoyin Asaolu</h3>
                                <h4><b>Gastroenterologist, Hepatologist, Endoscopist Stomach, liver and Intestine Specialist</b></h4>

                                <p>

                                <p>Dr. Olutoyin Asaolu is a graduate of the College of Medicine (MBBS), University of Ilorin. She had her internship and residency training at the Federal Teaching Hospital Ido-Ekiti and the Lagos University Teaching Hospital respectively.</p><p> She is a member of the West African College of Physicians.
                                She is a two-time recipient of the World Gastroenterology Organization (WGO) training scholarship, the South Africa Gastroenterology Foundation training and the United European Gastroenterology Week (UEGW) international scholarship.
                                She worked as a Consultant Gastroenterologist and a Lecturer at the University of Gitwe in Rwanda.</p>

                                <p>She is a member of the following Associations:</p>
                                <ul>
                                <li>Society of Gastroenterology and Hepatology in Nigeria (SOGHIN)</li>
                                <li>The American Society of Gastrointestinal Endoscopy (ASGE)</li>
                                </ul>

                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>




        <div className="main_block main7">

            <div className="main7-container" data-aos="zoom-in-left" data-aos-duration="3000">

                <div className="main7-container-1">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Join a community of socially conscious people, get the latest updates.</p>
                </div>

                <div className="main7-container-2">
                    
                    
                    {/* <!--<p>Email Address</p>--> */}
                    {/* <!--<input type="email" className="" placeholder="Email Address"/>--> */}
                    {/* <!--<br/>--> */}
                    {/* <!--<button type="submit" value="Subscribe" className="c_Subscribe_submit_button c_subscribe_btn">SUBSCRIBE NOW</button>--> */}
                    
                    
                    <form action="#">
                        
                        <div className="subscribe-input-container">
                            <input required type="email" id="email" autoComplete="off" placeholder="Enter Email Address" className="subscribe-text-input"/>
                            {/* <!--<label for="email" className="subscribe-label">Enter your Email Address</label>--> */}
                        </div>
                        
                        <button type="submit" value="Subscribe" className="c_Subscribe_submit_button c_subscribe_btn">SUBSCRIBE NOW</button>
                    </form>
                    
                    
                </div>

            </div>

            <div className="main7-container" id="main7-2" data-aos="zoom-in-right"></div>
            
            
        </div>

        <div id="last-web-page-category" className="footer_set_1_container">



            <div>

                <div className="footer_sets footer_set" data-aos="fade-up" data-aos-duration="3000">
                    <ul>
                    
                        <h2 className="footer_set_header" style={{marginBottom:'-10%'}}>Let's Chat</h2>

                        
                        <div className="c_social_media_link_section_container">
                            <section className="singleCol social-media-icons-white">

                            <a href="https://www.facebook.com/toyin.asaolu.1/" target="_blank" rel="noreferrer" title="Facebook" ><FontAwesomeIcon icon={faFacebook} /> </a> 

                            
                            <a href="https://www.instagram.com/hepatitiscorner/" target="_blank" rel="noreferrer" title="Instagram" ><FontAwesomeIcon icon={faInstagram} /> </a> 

                            
                            <a  href="https://www.linkedin.com/in/toyin-asaolu-5608a668/?originalSubdomain=ng" target="_blank" rel="noreferrer" title="Linkedin" ><FontAwesomeIcon icon={faLinkedin} /> </a> 
                            
                            
                            <a  href="https://wa.me/+23408035768694?text=hi" target="_blank" rel="noreferrer" title="Whatsapp" ><FontAwesomeIcon icon={faWhatsapp}className="color"/> </a> 



                            </section>



                            
                                    
                        </div>
                        
                        <li className="letsChatitems" style={{listStyleType:"none"}}><a href="mailto:timobhealthinternational@gmail.com">timobhealthinternational@gmail.com</a></li>

                        
                        <li style={{listStyleType: "none"}}><span style={{color: "white"}}>Health Support:</span> <a className="c_contact_href" href="tel:+234 808 806 8257">+234 808 806 8257</a></li>
                        
                        
                        <li style={{listStyleType: "none"}}> <span style={{color: "white"}}>Emergency line:</span> <a className="c_contact_href" href="tel:+234 808 806 8257">+234 808 806 8257</a></li>

                        
                        <li style={{listStyleType: "none"}}> <span style={{color: "white"}}>Feedback:</span> <a className="c_contact_href" href="tel:+234 808 806 8257">+234 808 806 8257</a></li>
                        
                    

                    </ul>
                </div>            
                
                <div className="footer_sets footer_set" data-aos="fade-up" data-aos-duration="3000">

                    <ul>
                    <h2 className="footer_set_header">About</h2>

                    <li> <Link to="/about"> About us </Link></li>
                    
                    <li> <Link to="/contact"> Contact us </Link></li>
                    
                    <li> <Link to="/Termsofuse"> Terms of Use </Link></li>
                                        
                    <li> <Link to="/Privacypolicy"> Privacy Policy </Link></li>


                    </ul>

                </div>

                

                <div className="footer_sets footer_set" data-aos="fade-up" data-aos-duration="3000">

                    <ul>

                        <h2 className="footer_set_header">Services</h2>                        
                        
                        <li> <Link to="/BMI"> Check your BMI </Link></li>
                        
                        <li> <Link to="/Doctor">Find a doctor </Link></li>


                    </ul>


                </div>

                {/* <div className="footer_sets footer_set" data-aos="fade-up">
                    <ul>
                    
                        <h2 className="footer_set_header">Quick links</h2>

                        
                        <?php

                        $all_categories_query = " SELECT * FROM thi_post_categories";
                        $all_categories = mysqli_query($connectDataBase, $all_categories_query);
                        
                        ?>
                        
                        <?php while($category = mysqli_fetch_assoc($all_categories)) :?>

                        <li>
                            <a href="<?= ROOT_URL?>post/blogs/category_posts.php?id=<?= $category['id']?>"><?= $category['title']?></a>
                        </li>



                        <?php endwhile ?>
                        


                    </ul>
                </div> */}





            </div>


            <div className="footer_signature" data-aos="fade-up" data-aos-duration="3000">

                <div className="footer_div_1_set">           
                 {/* <img src="{logo}"/><br/> 
               <span style="color: gold; cursor: pointer;" onclick="alert('Please contact +234 (0) 7052223261 or email expanzo@outlook.com for any question or enquires.')">Website by DuTech. </span> */}
                    
                {/* <span style="color: white; font-size: small;"> &copy; <span className="date c_footer_navbar_text" id="date" style="color: white; font-size: small;"> </span> Timob Health International All right reserved</span> */}

                
                <p style={{color: 'white', fontSize: 'small'}}>Copy right reserved 2024 Timob Health International.</p>


                </div>

            </div>

        </div>

        

    </footer>




    </>

  );
};