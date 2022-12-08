import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export function Pg3(){
    return(
        <>
            <div className="container">
                <div className="row p3 text-center text-white">
                    <div className="col-lg-4 bg-info">
                        <FontAwesomeIcon icon={faHistory} fontSize="30px" className="mt-3"/>
                        <h3>Our History</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
                    </div>
                    <div className="col-lg-4 bg-dark">
                        <FontAwesomeIcon icon={faCircleRadiation} fontSize="30px" className="mt-3"/>
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
                    </div>
                    <div className="col-lg-4 bg-success">
                        <FontAwesomeIcon icon={faEye} fontSize="30px" className="mt-3"/>
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}