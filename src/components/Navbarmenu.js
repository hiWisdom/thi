import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import Searchbar  from "./Searchbar";



const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];

    if(isMenu) {
        boxClass.push('menuq2');
    }
    
    else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];

    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }
    
    else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink to="/">
                    <img src="https://i.ibb.co/JrfXt91/Timob-White-Logo.png" alt="Timob-White-Logo"/> 
                        {/* <img src={logo} alt="logo" />  */}
                    </NavLink>
                </div>

                <div className="header__middle__menus">

                    <nav className="main-nav">

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>

                        
                    <Searchbar/>
                        

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link className="navlink" to="#"> About us  <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Privacy Policy </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Terms of Use </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Check your BMI </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Book doctor appoinment </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Find a doctor </NavLink> </li>
                        </ul>
                    </li>


                    <li className="menu-item " ><NavLink className="navlink" onClick={toggleClass} activeClassName='is-active' to={`/About`}> Contact us </NavLink> </li>

                    <li  className="menu-item" >
                        <NavLink className="navlink" exact activeClassName='is-active' onClick={toggleClass} to={`/`}>Check BMI</NavLink> 
                    </li>

                    <li className="menu-item " ><NavLink className="navlink" onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Find a doctor </NavLink> </li>


                    </ul>


                    </nav>     

                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu