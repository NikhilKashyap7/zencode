import React from "react";
import logo from "../images/zencode.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
function Myheaderpage() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="brand-logo" src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
    <div  class="d-none d-lg-flex  nav-contact ">
        
        <li className="conatact"><FontAwesomeIcon icon={faPhone} /> +914257896321</li>
        <li className="conatact"><FontAwesomeIcon icon={faWhatsapp} />+914257896321</li>
        <li className="conatact"><FontAwesomeIcon icon={faMessage} />enquiry@zencode.com</li>

        </div>
        <div className="nav-itmes">
      <ul class="navbar-nav ">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Courses
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Cyber Security</a></li>
                        <li><a class="dropdown-item" href="#">Sap</a></li>
                        <li><a class="dropdown-item" href="#">Java</a></li>
                        <li><a class="dropdown-item" href="#">Python</a></li>
                        <li><a class="dropdown-item" href="#">Software Testing</a></li>
                        <li><a class="dropdown-item" href="#">Graphic Designing And Video Editing</a></li>
                        <li><a class="dropdown-item" href="#">React js</a></li>
                        <li><a class="dropdown-item" href="#">Mean Stack</a></li>
                        <li><a class="dropdown-item" href="#">Mern Stack</a></li>
                        <li><a class="dropdown-item" href="#">Digital Marketing </a></li>
                        <li><a class="dropdown-item" href="#">Android</a></li>
                        <li><a class="dropdown-item" href="#">AWS</a></li>
                        <li><a class="dropdown-item" href="#">Angular js</a></li>
                    </ul>
                </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Pricing</a>
        </li>
        
        
      </ul>
      <div class="d-lg-flex" tabIndex="-1" aria-haspopup="true">
                <a href="#" class="btn btn-custom me-2">Login / Signup</a>
                <a href="#" class="btn btn-custom">Contact Us</a>
            </div>
            </div>
    </div>
  </div>
</nav>
    )
}

export default Myheaderpage