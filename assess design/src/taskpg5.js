import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCheckCircle, faHeartCircleCheck, faPersonCirclePlus,} from "@fortawesome/free-solid-svg-icons";

export function Pg5(){
    return(
        <div className="container mt-5 text-light bg-dark">
            <div className="row text-center">
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faCalendarDays} fontSize="25px"  className="mt-3"/>
                    <h1>12 +</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faCheckCircle} fontSize="25px" className="mt-3"/>
                    <h1>999 +</h1>
                    <p>COMPLETED PROJECTS</p>
                </div>
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faPersonCirclePlus} fontSize="25px" className="mt-3"/>
                    <h1>480 +</h1>
                    <p>TOTAL CLIENTS</p>
                </div>
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faHeartCircleCheck} fontSize="25px" className="mt-3"/>
                    <h1>15 +</h1>
                    <p>AWARD WON</p>
                </div>
            </div>
        </div>
    )
}