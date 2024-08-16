import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const Footer = (props) => {
   
    return (
        <div  className="bg-light text-dark text-center py-3 mt-auto container d-flex justify-content-center align-items-center">
            <div  className="d-flex justify-content-center align-items-center text-center">
                <p>&copy; 2024 SaloSkilo</p>
                
            </div>
        </div>
    );
};

export default Footer;
