import React from "react";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';import './Header.css';
import mainlogo from '../header/mainlogo.png';

const Header = () => {
    return (
        <>
        <div className="header container-fluid">
        
        <div className="row text-center justify-content-center align-items-center">
        <div className="col-md-3">
            <img src={mainlogo} alt="Syed Muzammil Ashfaque"/>
            </div>
            <div className="offset-md-5 col-md-3"><h1><SpeakerNotesIcon /> MA Keep <SpeakerNotesIcon/></h1></div>
        </div>
        </div>
            
    
        </>
    )
}

export default Header
