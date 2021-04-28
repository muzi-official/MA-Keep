import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css';

const Footer = () => {


const year = new Date().getFullYear();



    return (
        <>
        <br />       
        <br />
        <br />
        <div className="footer container-fluid text-center position-fixed bottom-0">
           <p> MA Copyright <CopyrightIcon/> {year}</p>
 </div>
        </>
    )
}

export default Footer;
