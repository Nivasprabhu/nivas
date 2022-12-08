import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import Image1 from './1.jpg';
import Image2 from './2.jpg';
import Image3 from './3.jpg';
import Image4 from './4.jpg';
import Image5 from './5.jpg';
import Image6 from './6.jpg';


export function Pg6(){
    return(
        <div className="container mt-5">
            <div className="col-lg-12 text-center text-success">
                <h1>Our Portfolio</h1>
            </div>

            <div className="col-lg-12 text-center mt-5">
                <p>A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, and cash equivalents, 
                    as well as their fund counterparts.</p>
            </div>

            <div className="row">
                
            </div>

            <div className="row text-primary mt-5">
                <div className="col-lg-1">&nbsp;</div>
                <h5 className="col-lg-2">ALL</h5>
                <h5 className="col-lg-3">WEB DEVELOPMENT</h5>
                <h5 className="col-lg-3">GAME DEVELOPMENT</h5>
                <h5 className="col-lg-3">APP DEVELOPMENT</h5>
            </div>
                            
            <div className="row mt-5">
                <div className="col-lg-4">
                    <img src={Image1} height="300px" width="380px" alt="image"/>
                </div>
                <div className="col-lg-4">
                    <img src={Image2} height="300px" width="380px" alt="image"/>
                </div>
                <div className="col-lg-4">
                        <img src={Image3} height="300px" width="380px" alt="image"/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4">
                    <img src={Image4} height="300px" width="380px" alt="image"/>
                </div>
                <div className="col-lg-4">
                    <img src={Image5} height="300px" width="380px" alt="image"/>
                </div>
                <div className="col-lg-4">
                    <img src={Image6} height="300px" width="380px" alt="image"/>
                </div>
            </div>
    
        </div>
    )
}