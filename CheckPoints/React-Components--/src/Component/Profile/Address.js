import React from 'react';
import "./Address.css";
import {FaMapMarkerAlt,FaPhoneSquareAlt} from "react-icons/fa";
import {IconContext} from 'react-icons';
const Address =() => {
    return (
    <IconContext.Provider value ={{color:"black", size:"1.5em" ,}}>
        <div className="container">
        <div className="row">
            <div className="col">
            <h4> CONTACT ME </h4>
            <ul className="list-unstyled">
                <li> <FaPhoneSquareAlt/>Phone : 25960075</li>
                <li><FaMapMarkerAlt/>Tunis-TUNISIA</li>
            </ul>
            </div>
        </div>
    <br/>
        </div>
        </IconContext.Provider>
    )
}
export default Address

