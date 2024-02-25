
//import react
import React, {useEffect, useState} from 'react';

//import stylesheet
import '../css/BasicSlider.css';

//import slide-show component and function

/**
 * below we are importing HeroSlider from react node_modules 
 * 
 * import HeroSlider, {Slider} from 'hero-slider';
 * 
**/

import imageSlide from './imgdata'


//images

//favi-icons
import{ FaChevronCircleDown } from 'react-icons/fa';


//Code your React Application below, by creating a constant class object named App
const BasicSlider =  () => {

    /**
     * create a constant value of currentState and setCurrentState,
     *  set the values to react useState method.
     * 
     * */
    const[currentState, setCurrentState] = useState(0);


/**
 * create a constant object of bgImagesStyle,
 *  create it named value pairs(properties and values).
 * 
 * */
    const bgImagesStyle =  {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%'
    }

    /**
     * 
     * use the react useEffect Hooks
     * 
     * **/
    useEffect(()=>{
        const timer = setTimeout(()=> {
            if(currentState===2) {
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState + 1)
            }

        }, 2000)
        return () => clearTimeout(timer);
    }, 
    
    
    /**
     * Below are different illustration on 
     * how to write different react useEffect Hooks Dependency
     * 
     * 1. You can remove the comma and the square bracket, in javascript know as array for indefinite loops of array values.
     * 1a. Example 1: useEffect(()=>);
     * 1b. Example 1: useEffect( function(){} or ()=> <function>);
     * 
     * 
     * 
     * 2. You can leave the comma and the square bracket with a constant value inside the array, also for an indefinite loops of array values.
     * 2a. Example 1: useEffect(()=>, [value]);
     * 2b. Example 1: useEffect( function(){} or ()=> <function>, <dependency>[value]);
     * 
     * 
     * 
     * 3. If you want the manipulative DOM not to loop, leave the comma and the square bracket with no constant value inside the array....:
     * 3a. Example 1: useEffect(()=>, []);
     * 3b. Example 1: useEffect( function(){} or ()=> <function>, <dependency>[]);
     * 
     */
    [currentState])





    
/**
 * Code your React Application below, 
 * by creating a return statement for the constant class object,
 *  named App
 * 
 * */
    return (


        <div className="main_block_content main_block_content2 mapContainer">



            <div className="mapDropDown">
            <select>
                <option>Consult with a Stomach Doctor <FaChevronCircleDown /></option>
            </select>
            </div>
            {/* <img src={Map1} className="MapImages"/> */}
            <div className="MapImages" style={bgImagesStyle} ></div>





      </div>
    )
}

export default BasicSlider;