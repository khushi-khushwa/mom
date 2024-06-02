import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import momlogo from '../assets/mom-logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Navbar() {
  useEffect(() => {
    const scrollValue = () => {
      const navbar = document.getElementById('navbar');
      const scroll = window.scrollY;
      if (scroll < 130) {
        navbar.classList.remove('BgColour');
      } else {
        navbar.classList.add('BgColour');
      }
    };

    window.addEventListener('scroll', scrollValue);
    return () => {
      window.removeEventListener('scroll', scrollValue);
    };
  }, []);
  return (
    <div>
        <section className="navbar-area is-sticky">
      <div className="main-nav">
        <nav className="navbar navbar-expand-lg nav-light fixed-top" id="navbar">
          <div className="container gx-lg-0 nav-container">
            <Link className="navbar-brand" to="/">
              <img src={momlogo} alt="mom_logo" className="mom-logo" />
            </Link>
            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu className="fa-solid fa-bars"  />
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img src={momlogo} alt="mom_logo" className="mom-logo" />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item p-3">
                    <Link className="nav-link active fw-semibold" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown p-3">
                    <Link className="nav-link fw-semibold" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item p-3">
                    <Link className="nav-link fw-semibold" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item p-3">
                    <Link className="nav-link fw-semibold" to="/project">
                      Project
                    </Link>
                  </li>
                  <li className="nav-item p-3">
                    <Link className="nav-link fw-semibold" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* Start Other Option */}
            <div className=" others-option d-flex justify-content-center align-items-center header-icon p-3">
              <Link
                className="default-btn text-decoration-none"
                to="/"
              >
                <a href="https://www.facebook.com/profile.php?id=61559848681988&mibextid=ZbWKwL" style={{color:"white"}}>
                  <FaFacebookSquare style={{marginRight:'10px'}} size={23} className="fa-brands fa-square-facebook" />
                </a>
                <a href="https://www.linkedin.com/company/momhomes/about/?viewAsMember=true" style={{color:'white'}}>
                <IoLogoLinkedin style={{marginRight:'10px'}} size={25} className="fa-brands fa-twitter"    />
                </a>
                <a href="https://www.instagram.com/momhomes_/?igsh=MW10N2diNTU2eTBueg%3D%3D" style={{color:"white"}}>
                <IoLogoInstagram style={{marginRight:'5px'}}  size={25} className="fa-brands fa-instagram"   />
                </a>
              </Link>
            </div>
            {/* End Other Option */}

              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>

    </div>
  )
}

export default Navbar