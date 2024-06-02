import React, { useEffect, useState } from 'react'
import momlogo from '../assets/mom-logo.png'
import waiting from '../assets/images/project/waiting-room.png'
import bathrom from '../assets/images/project/bathroom.png'
import bed from '../assets/images/project/bed.png'
import {Link} from 'react-router-dom'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import interior from '../assets/images/project/interior.png'
import bed2 from '../assets/images/project/bedroom/02.jpg'
import bed3 from '../assets/images/project/bedroom/3.jpg'
import bed4 from '../assets/images/project/bedroom/4.jpg'
import bed5 from '../assets/images/project/bedroom/5.jpg'
import bed14 from '../assets/images/project/bedroom/14.jpg'
import bed20 from '../assets/images/project/bedroom/20.jpeg'
import bed13 from '../assets/images/project/bedroom/13.jpg'
import bed16 from '../assets/images/project/bedroom/16.jpg'
import bed21 from '../assets/images/project/bedroom/21.jpg'
import bed19 from '../assets/images/project/bedroom/19.jpeg'
import kit1 from '../assets/images/project/kitchen/1.jpg'
import kit2 from '../assets/images/project/kitchen/2.jpg'
import kit3 from '../assets/images/project/kitchen/3.jpg'
import kit4 from '../assets/images/project/kitchen/4.jpg'
import kit5 from '../assets/images/project/kitchen/5.jpg'
import kit6 from '../assets/images/project/kitchen/6.jpg'
import kit7 from '../assets/images/project/kitchen/7.jpg'
import kit9 from '../assets/images/project/kitchen/9.jpg'
import kit10 from '../assets/images/project/kitchen/10.jpg'
import kit11 from '../assets/images/project/kitchen/11.jpg'
import kit13 from '../assets/images/project/kitchen/13.jpg'
import kit20 from '../assets/images/project/kitchen/20.jpg'
import kit21 from '../assets/images/project/kitchen/21.jpg'
import kit22 from '../assets/images/project/kitchen/22.jpg'
import wa1 from '../assets/images/project/waitingroom/1.jpg'
import wa2 from '../assets/images/project/waitingroom/2.jpg'
import wa3 from '../assets/images/project/waitingroom/3.jpg'
import wa4 from '../assets/images/project/waitingroom/4.jpg'
import wa5 from '../assets/images/project/waitingroom/5.jpg'
import wa6 from '../assets/images/project/waitingroom/6.jpg'
import wa7 from '../assets/images/project/waitingroom/7.jpg'
import wa8 from '../assets/images/project/waitingroom/8.jpg'
import wa9 from '../assets/images/project/waitingroom/9.jpg'
import ba1 from '../assets/images/project/bathroom/1.jpg'
import ba2 from '../assets/images/project/bathroom/2.jpg'
import ba3 from '../assets/images/project/bathroom/3.jpg'
import ba4 from '../assets/images/project/bathroom/4.jpg'
import ba5 from '../assets/images/project/bathroom/5.jpg'
import ba6 from '../assets/images/project/bathroom/6.jpg'
import ba7 from '../assets/images/project/bathroom/7.jpg'
import ba8 from '../assets/images/project/bathroom/8.jpg'
import ba9 from '../assets/images/project/bathroom/9.jpg'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
function Project() {
  const [kitchen, setKitchen] = useState(false)
  const [activeTab, setActiveTab] = useState('bedroom');

  const handlebedroom = () => setActiveTab('bedroom');
  const handleliving = () => setActiveTab('living');
  const handlekitchen = () => setActiveTab('kitchen');
  const handlebathroom = () => setActiveTab('bathroom');

  const [email, setEmail] = useState('')
  const handlenews=async(e)=>{
    e.preventDefault();
    const res=await fetch(`${window.location.origin}/newslater`,{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email
      })
    })
    const result =await res.json();
    if(result.success)
      {
        console.log("success")
        toast.success("Sent Success")
      }
  }
  return (
    <div><>
    <section className="project-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="project-banner-img">
              <h4>Project</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* project gallery */}
    <section classs="gallery-tabs bg-danger">
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          
          <nav>
            <div
              className="nav justify-content-center nav-underline furniture-service"
              id="nav-tab"
              role="tablist"
            >
              <button
                className={`nav-link ${activeTab === 'bedroom' ? 'active' : ''}`}
                id="nav-bedroom-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-bedroom"
                type="button"
                role="tab"
                aria-controls="nav-bedroom"
                aria-selected={activeTab === 'bedroom'}
                onClick={handlebedroom}
              >
                <div className="furniture text-center">
                  <div className="icon">
                    <img src={bed} alt="bedroom-img" />
                    <h3>Bedroom Room Better</h3>
                  </div>
                </div>
              </button>
              <button
                className={`nav-link ${activeTab === 'living' ? 'active' : ''}`}
                id="nav-waitingroom-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-waitingroom"
                type="button"
                role="tab"
                aria-controls="nav-waitingroom"
                aria-selected={activeTab === 'living'}
                onClick={handleliving}
              >
                <div className="furniture text-center">
                  <div className="icon">
                    <img src={waiting} alt="waiting-room-img" />
                    <h3>Living Room Design</h3>
                  </div>
                </div>
              </button>
              <button
                className={`nav-link ${activeTab === 'kitchen' ? 'active' : ''}`}
                id="nav-kitchen-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-kitchen"
                type="button"
                role="tab"
                aria-controls="nav-kitchen"
                aria-selected={activeTab === 'kitchen'}
                onClick={handlekitchen}
              >
                <div className="furniture text-center">
                  <div className="icon">
                    <img src={interior} alt="interior-img" />
                    <h3>Kitchen Design</h3>
                  </div>
                </div>
              </button>
              <button
                className={`nav-link ${activeTab === 'bathroom' ? 'active' : ''}`}
                id="nav-bathroom-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-bathroom"
                type="button"
                role="tab"
                aria-controls="nav-bathroom"
                aria-selected={activeTab === 'bathroom'}
                onClick={handlebathroom}
              >
                <div className="furniture text-center">
                  <div className="icon">
                    <img src={bathrom} alt="bathroom-icon-img" />
                    <h3>Bathroom Design</h3>
                  </div>
                </div>
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {activeTab === 'bedroom' && (
              <div
                className="tab-pane fade show active"
                id="nav-bedroom"
                role="tabpanel"
                aria-labelledby="nav-bedroom-tab"
                tabIndex={0}
              >
                <div className="row gy-4">
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed2} alt="bedroom 2" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed4} alt="bedroom 4" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed5} alt="bedroom 5" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed3} alt="bedroom 3" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed20} alt="bedroom 6" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed14} alt="bedroom 7" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed13} alt="bedroom 8" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed16} alt="bedroom 8" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bedroom">
                      <img src={bed21} alt="bedroom 21" />
                    </div>
                  </div>
                
                  
                </div>
              </div>
            )}
            {activeTab === 'living' && (
              <div
                className="tab-pane fade show active"
                id="nav-waitingroom"
                role="tabpanel"
                aria-labelledby="nav-waitingroom-tab"
                tabIndex={0}
              >
                <div className="row gy-4">
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bathroom">
                      <img src={wa1} alt="waiting room 1" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bathroom">
                      <img src={wa2} alt="waiting room 2" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bathroom">
                      <img src={wa4} className="four-img" alt="waiting room 4" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bathroom">
                      <img src={wa3} alt="waiting room 3" />
                      <img src={wa7} className="waiting-img" alt="waiting room 7" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bathroom">
                      <img src={wa5} alt="waiting room 5" />
                      <img src={wa9} className="waiting-img" alt="waiting room 9" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-sm-12">
                    <div className="bathroom">
                      <img src={wa6} alt="waiting room 6" />
                      <img src={wa8} className="waiting-img" alt="waiting room 8" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'kitchen' && (
              <div
                className="tab-pane fade show active"
                id="nav-kitchen"
                role="tabpanel"
                aria-labelledby="nav-kitchen-tab"
                tabIndex={0}
              >
                <div className="row gy-4">
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit1} alt="kitchen 1" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit2} alt="kitchen 2" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit3} alt="kitchen 3" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit4} alt="kitchen 4" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit5} alt="kitchen 5" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit6} alt="kitchen 6" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit7} alt="kitchen 7" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit9} alt="kitchen 9" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit13} alt="kitchen 13" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit20} alt="kitchen 20" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit21} alt="kitchen 21" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={kit22} alt="kitchen 22" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'bathroom' && (
              <div
                className="tab-pane fade show active"
                id="nav-bathroom"
                role="tabpanel"
                aria-labelledby="nav-bathroom-tab"
                tabIndex={0}
              >
                <div className="row gy-4">
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={ba7} alt="bathroom 7" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={ba2} alt="bathroom 2" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={ba3} alt="bathroom 3" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={ba4} alt="bathroom 4" />
                      <img src={ba1} className="two-img" alt="bathroom 1" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={ba5} alt="bathroom 5" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="bathroom">
                      <img src={ba6} alt="bathroom 6" />
                      <img src={ba8}className="two-img" alt="bathroom 8" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    </section>
   {/* footer */}
   <section className="footer project-footer">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div className="footer-widget">
              <img src={momlogo} />
              <p className="pt-4">
                Transform your home with personalized, stylish, and functional
                designs by Mom Homes Interior Company. Your dream home awaits!
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12  pt-md-4">
            <div className="f-widget-title page-links">
              <h2>OurLinks</h2>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/project">Project</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/about">Contact Us</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12  pt-md-4 pt-sm-4">
            <div className="f-widget-title services  ">
              <h2>OurServices</h2>
              <div className="footer-links">
                <ul>
                <li>
                      <Link href="/service">False Ceiling</Link>
                    </li>
                    <li>
                      <Link href="/service">Electrical</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="/service">Plumbing</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/service">Flooring</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/service">Furniture & production</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/service">Kitchen & Wardrobe</Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12  pt-md-4 pt-sm-4">
            <div className="newsletter f-widget-title">
              <h2>OurNewsletter</h2>
              <form  onSubmit={handlenews}>
                <div className="email-submit d-flex">
              
                  <input type="email" value={email} placeholder="Your Email..." required  onChange={(e)=>setEmail(e.target.value)}/>
                  <button type='submit' style={{border:'none',backgroundColor:'#df8133',margin:'0%',padding:'0%'}}><FaAngleRight style={{color:'black',height:'60apx',width:'60px',cursor:'pointer'}} size={30}  className="fa-solid fa-angle-right" /></button>
                </div>
                <div className="social-media">
                  <a href="https://www.facebook.com/profile.php?id=61559848681988&mibextid=ZbWKwL">
                    <FaFacebookSquare style={{color:'white'}} size={25} className="fa-solid fa-angle-right" />
                  </a>
                  <a href="https://www.instagram.com/momhomes_/?igsh=MW10N2diNTU2eTBueg%3D%3D">
                    <FaInstagram style={{color:'white'}} size={25} className="fa-solid fa-angle-right"/>
                  </a>
                  <a href="https://www.linkedin.com/company/momhomes/about/?viewAsMember=true" style={{color:'white'}}>
                <IoLogoLinkedin style={{marginRight:'10px'}} size={25} className="fa-brands fa-twitter " />
                </a>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row gx-md-5 gy-5 mt-4">
          <div className="col-md-12 col-lg-4 col-sm-12  d-flex justify-content-center align-items-center">
            <div className="contact-number">
              <div className="contact-icon">
                <svg
                  viewBox="0 -0.5 25 25"
                  height="3.5rem"
                  width="3.7rem"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0.5" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.24033 8.16795C6.99433 7.37295 7.26133 7.14995 7.58233 7.04695C7.80482 6.98843 8.03822 6.98499 8.26233 7.03695C8.55733 7.12295 8.63433 7.18795 9.60233 8.15095C10.4523 8.99695 10.5363 9.08895 10.6183 9.25095C10.7769 9.54253 10.8024 9.88825 10.6883 10.1999C10.6043 10.4349 10.4803 10.5909 9.96533 11.1089L9.62933 11.4459C9.54093 11.5356 9.51997 11.6719 9.57733 11.7839C10.3232 13.0565 11.3812 14.1179 12.6513 14.8679C12.7978 14.9465 12.9783 14.921 13.0973 14.8049L13.4203 14.4869C13.6199 14.2821 13.8313 14.0891 14.0533 13.9089C14.4015 13.6935 14.8362 13.6727 15.2033 13.8539C15.3823 13.9379 15.4423 13.9929 16.3193 14.8669C17.2193 15.7669 17.2483 15.7959 17.3493 16.0029C17.5379 16.3458 17.536 16.7618 17.3443 17.1029C17.2443 17.2949 17.1883 17.3649 16.6803 17.8839C16.3733 18.1979 16.0803 18.4839 16.0383 18.5259C15.6188 18.8727 15.081 19.043 14.5383 19.0009C13.5455 18.9101 12.5847 18.6029 11.7233 18.1009C9.81416 17.0894 8.18898 15.6155 6.99633 13.8139C6.73552 13.4373 6.50353 13.0415 6.30233 12.6299C5.76624 11.7109 5.48909 10.6638 5.50033 9.59995C5.54065 9.04147 5.8081 8.52391 6.24033 8.16795Z"
                      stroke="white"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.8417 4.29409C14.4518 4.15416 14.0224 4.35677 13.8824 4.74664C13.7425 5.1365 13.9451 5.56598 14.335 5.70591L14.8417 4.29409ZM18.7868 10.0832C18.9333 10.4707 19.3661 10.666 19.7536 10.5195C20.141 10.373 20.3364 9.94021 20.1899 9.55276L18.7868 10.0832ZM13.6536 6.52142C13.2495 6.43018 12.848 6.68374 12.7568 7.08778C12.6655 7.49182 12.9191 7.89333 13.3231 7.98458L13.6536 6.52142ZM16.5696 11.1774C16.6676 11.5799 17.0733 11.8267 17.4757 11.7287C17.8782 11.6307 18.125 11.2251 18.0271 10.8226L16.5696 11.1774ZM14.335 5.70591C16.3882 6.44286 18.0153 8.04271 18.7868 10.0832L20.1899 9.55276C19.2631 7.10139 17.3084 5.17942 14.8417 4.29409L14.335 5.70591ZM13.3231 7.98458C14.9238 8.34607 16.1815 9.58301 16.5696 11.1774L18.0271 10.8226C17.5042 8.67475 15.8098 7.0084 13.6536 6.52142L13.3231 7.98458Z"
                      fill="none"
                    />
                  </g>
                </svg>
              </div>
              <div className="calling ms-3">
                <h5>Call Us Now</h5>
                <p>+917042263950 ,+918929685663</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-sm-12  d-flex justify-content-center align-items-center">
            <div className="id-address ">
              <div className="email-icon ">
                <svg
                  viewBox="0 0 24 24"
                  height="2.2rem"
                  width="2.2rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={1} stroke="white" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"></path>
                    <path fill="none" d="M0 0h24v24H0z" />
                  </g>
                </svg>
              </div>
              <div className="email-id ms-3 ">
                <h5>Email Address</h5>
                <p> momhomesid@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-sm-12  d-flex justify-content-center align-items-center">
            <div className="location-address">
              <div className="location-icon">
                <svg
                  version={1.0}
                  id="Layer_1"
                  height="2rem"
                  width="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        fill="white"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>
                      <path
                        fill="white"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>
                      <path
                        fill="white"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="full-address ms-3">
                <h5>Location</h5>
                <p> Mom Homes ,Sector 93,Gurugram,HR </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  </div>
  )
}

export default Project