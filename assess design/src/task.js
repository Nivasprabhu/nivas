import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './a.jpg';
import Image1 from './b.jpg';
import Image2 from './c.jpg';
import Carousel from 'react-bootstrap/Carousel';

export default function Task(){
    return(
        <>
            <div className="container">

                <div className="row justify-content-end text-dark">
                    
                    <h5 className="ml-4">Home</h5>
                    <h5 className="ml-4">About us</h5>
                    <h5 className="ml-4">Our services</h5>
                    <h5 className="ml-4">Our Portfolio</h5>
                    <h5 className="ml-4">Contact us</h5>
                </div>

                <div className='carousel'>

                    <Carousel>
                            <Carousel.Item>
                            <img className="d-block w-100" src={Image} alt="First slide" />
                                <Carousel.Caption className='caption'>
                                    <h3 className="text-light">Game Development</h3>
                                    <p className="text-light">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <button className='butpage1 bg-warning text-primary'>GET STARTED</button>
                                </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                                <img className="d-block w-100 " src={Image1} alt="Second slide"/>
                            <Carousel.Caption className='caption'>
                                <h3 className="text-light">Game Development</h3>
                                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className='butpage1 bg-warning text-primary'>GET STARTED</button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                                <img className="d-block w-100" src={Image2} alt="Third slide"/>
                            <Carousel.Caption className='caption'>
                                <h3 className="text-light">Game Development</h3>
                                <p className="text-light">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                <button className='butpage1 bg-warning text-primary'>GET STARTED</button>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>

                </div>

                

            </div>
        
        
        </>
    )
}