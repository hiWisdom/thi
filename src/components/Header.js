import { Link } from "react-router-dom";
export const Header = () => {
  return (

    
    <>
      <header>    

      <div className="nav-bar">

          <Link to="/" className="logo"><img src="https://i.ibb.co/JrfXt91/Timob-White-Logo.png" alt="Timob-White-Logo"/> </Link>

          <div className="navigation">

              <div className="nav-items">


      
                  <i className="uil uil-times nav-close-btn"></i>

                  <Link to="/About" className="nav-link"> <i className="fa-solid fa-book nav-icons"></i> About us </Link>

                  <Link to="/Contact" className="nav-link"> <i className="fa-regular fa-address-book"></i> Contact us </Link>

                  <Link to="/Check-Your-Body-Mass-Index" className="nav-link"> <i className="fa-solid fa-child-reaching"></i> Check BMI </Link>
                  
                  <Link to="/Find-A-Doctor" className="nav-link"> <i className="fa-solid fa-user-doctor"></i> Find a doctor </Link>
                  
                  {/* <a href="<?= ROOT_URL ?>pages/request_appoinment.php"><i className="uil uil-document-layout-left"></i>Request appoinment</a> */}
                  
                  <span className="c_search_container c_search_container_sm">

                  <form action="" method="">
                  {/* <input type="search" placeholder="Search blog or articles..." name="search"> */}
                  <button id="myBtn" title="Search..." type="button"><p>Search</p><i className="fa fa-search"></i></button>
                  
                  </form>
                                          
                  </span>

                  <a href="#last-web-page-category" className="scrollDown"><img className="scrollDown" src="https://cdna.artstation.com/p/assets/images/images/035/096/026/original/kiko-dura-gifhealth2.gif?1614095329" height="30" alt="Scrolldown"/></a>
                  
                  <a href="#" className="scrollDown"><i  className="scrollDown uil uil-document-layout-left"></i> <div id="google_element"></div></a>


              </div>

          </div>

          {/* <i id="myBtn_sm" className="fa fa-search"></i> */}
          {/* <p id="myBtn_sm" className="fa fa-search">Search          <i id="myBtn_sm" className="fa fa-search"></i></p> */}
          
          
          {/* <i className="uil uil-apps nav-menu-btn"></i> */}
          
          <p className="uil uil-apps nav-menu-btn">Menu <i className="uil uil-apps nav-menu-btn"></i></p>


      </div>

      </header>


    </> 




  );
};
