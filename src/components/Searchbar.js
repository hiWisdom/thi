//import React and react useEffect
import React, {useEffect} from 'react';
//import react useState
import {useState} from 'react';
//import search icons
import {BsSearch} from 'react-icons/bs';

const Searchbar = () => {

    const [active, setActive] = useState(false);

    const input = React.useRef();

    useEffect(()=>{
        if(active)input.current.focus()
    },[active]);


    return (

        <div className="container">

            <div className="searchbar">

                <input type="text" ref={input} className={active?'input active':'input'} placeholder="Search"/>
                
                <button className="btn" type="submit" onClick={() => setActive(!active)}><BsSearch/></button>

            </div>

        </div>
    )

}


export default Searchbar