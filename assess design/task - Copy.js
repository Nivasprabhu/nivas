import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './a.jpg';
import Image1 from './b.jpg';
import Image2 from './c.jpg';

export default  function Task(){
    return(
        <>

            <div className="container">
                
                <div className="row justify-content-end mt-4">
                    <h5>HOME</h5>
                    <h5 className="ml-4">ABOUT US</h5>
                    <h5 className="ml-4">OUR SERVICES</h5>
                    <h5 className="ml-4">OUR PORTFOLIO</h5>
                    <h5 className="ml-4">CONTACT US</h5>
                </div>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

                
                <div class="carousel-item active">
                    <img src="a.jpg" class="d-block w-100" alt="First slide"></img>
                </div>
                </div>
                <div class="carousel-item">
                    <img src="b.jpg" class="d-block w-100" alt="Second slide"></img>
                    </div>
                 <div class="carousel-item">
                    <img src="c.jpg" class="d-block w-100" alt="Third slide"></img>
                    </div>
            

        <ol class="carousel-indicators">
        <li data-target="#carouselExampleSlidesOnly" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleSlidesOnly" data-slide-to="1"></li>
        <li data-target="#carouselExampleSlidesOnly" data-slide-to="2"></li>
        </ol>
    

             <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
    
        <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
                </div>

            </div>

        
        </>
    )
}