import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faMobileAndroidAlt, faPhone, faTv, faW } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export function Pg4(){
    return(
        
        <div className="container mt-3">
            <div>
                <h1 className="text-center text-primary">Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
            </div>
            <div className="row mt-3 col-lg-12">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="15px" className="mt-3" />
                    <p className="mt-2 ml-2">WEB DESIGN</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-success d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="15px" className="mt-3" />
                    <p className="mt-2 ml-2">WEB DEVELOPMENT</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-info d-flex">
                    <FontAwesomeIcon icon={faGear} fontSize="15px" className="mt-3"/>
                    <p className="mt-2 ml-2">THEME DEVELOPMENT</p>
                </div>
            </div>

            <div className="row mt-3 col-lg-12">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faGears} fontSize="15px" className="mt-3" />
                    <p className="mt-2 ml-2">GAME DEVELOPMENT</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-primary  d-flex">
                    <FontAwesomeIcon icon={faMobileAndroidAlt} fontSize="15px" className="mt-3" />
                    <p className="mt-2 ml-2">APPS DEVELOPMENT</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-danger d-flex">
                    <FontAwesomeIcon icon={faGear} fontSize="15px" className="mt-3"/>
                    <p className="mt-2 ml-2">DESKTOP APPLICATION</p>
                </div>
            </div>

            <div className="row mt-3 col-lg-12">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-danger   d-flex">
                    <FontAwesomeIcon icon={faW} fontSize="15px" className="mt-3" />
                    <p className="mt-2 ml-2">WORDPRESS THEMES</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="15px" className="mt-3"/>
                    <p className="mt-2 ml-2">WORDPRESS PLUGINS</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-success d-flex">
                    <FontAwesomeIcon icon={faPhone} fontSize="15px" className="mt-3" />
                    <p className="mt-2 ml-2">SUPPORT & IT</p>
                </div>
            </div>


        </div>
        
    )   
}