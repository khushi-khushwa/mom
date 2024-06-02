import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import firsttest from '../assets/images/about/first.png'
import secondtest from '../assets/images/about/second.png'
import momlogo from '../assets/mom-logo.png'
import founder2 from '../assets/images/about/5.jpg'
import thirdtest from '../assets/images/about/third.png'
import photo17 from '../assets/images/about/6.jpg'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import firtest from '../assets/images/testimonial/first.jpg'
import sectest from '../assets/images/testimonial/second.jpg'
import thirtest from '../assets/images/testimonial/third.jpg'
import bedpr from '../assets/images/project/home_project/bed.jpg'
import kitchenpr from '../assets/images/project/home_project/bathroom.jpg'
import bathpr from '../assets/images/project/home_project/kitchen.jpg'
import furniturepr from '../assets/images/project/home_project/furniture.jpg'
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import myVideo from '../assets/images/video/video.mp4';
function About() {
  const [photo,setPhoto]=useState(founder2)
  const [email, setEmail] = useState('')
  const [test, setTest] = useState('One of the best company in market. Mom Homes has done a great job in doing interior of our house... I would like to mention about Durgesh senior designer and project manager even you can say owner of this company. He is very polite, hard working, professional, extremely helpful and knowledgeable in his domain he personally monitored the project from start till end. Great job overall by Mom Homes team... Thanks 😌')
  const surender = "One of the best company in market. Mom Homes has done a great job in doing interior of our house... I would like to mention about Durgesh senior designer and project manager even you can say owner of this company. He is very polite, hard working, professional, extremely helpful and knowledgeable in his domain he personally monitored the project from start till end. Great job overall by Mom Homes team... Thanks 😌";
  const sanjay = "Room planning, Bathroom design, Custom art selection, Dining room design, Real estate staging,09 Refurbishment, Door design, Stone, brick, & kstucco design, Window design, Living room design, Lighting design, Kitchen design, Home decor selection, Flooring selection, Cabinetry & hardware design, Bedroom design, Interior architectural design, Interior decorating, Appliance selection, Restaurant design, Space planning, Home staging Positive: Professionalism, Punctuality, Quality, Responsiveness, Value";
  const ishwar= "Bathroom design, Dining room design, Door design, Window design, Commercial interior design, Living room design, Closet design, Kitchen design, Home decor selection, Bedroom design, Interior architectural design, Interior decorating, Restaurant design Positive: Professionalism, Punctuality, Quality, Responsiveness, Value";
  const [cname, setCname] = useState('Surender Choudhary');
  const handleOne=()=>{setTest(surender)
    setCname('Surender Choudhary')
  }
  const handleTwo=()=>{setTest(sanjay)
    setCname('Sanjay Nagar')
  }
  const handleThree=()=>{setTest(ishwar)
    setCname('Ishwar Singh')
  }
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
  const slider=()=>{
    
      setTimeout(() => {
        setPhoto(photo17)
        setTimeout(() => {
          setPhoto(founder2)
          slider();
        }, 2000);
      }, 2000);
      

  
  }
  useEffect(() => {
   slider();
  }, [])
  
  return (
    <div><>
    <section className="about-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="about-banner-img">
              <h4>About Us</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 about-detail">
            <div className="about-content">
              <h4>Meet Mom Homes </h4>
              <h3>Your Premier Interior Designers </h3>
              <p>
                {" "}
                Welcome to Mom Homes, where we transform houses into homes, and
                dreams into reality. Every space is a reflection of your unique
                style and personality.Founded with a passion for creating spaces
                that are both functional and aesthetically pleasing, we are
                dedicated to providing unparalleled interior design services
                tailored to your unique needs.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 about-detail">
            <div id="slider-1" className="owl-carousel testimonial-shape">
              <div className="about-image">
                <img src={photo} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

   
    
    {/* testimonial */}
    <section className="testimonial">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="testimonial-title text-center">
                <h4> OUR TESTIMONIAL</h4>
                <h1>What They Say's About Us</h1>
              </div>
              <div className="grid text-center">
                <div className="">
                  <nav>
                    <div
                      className="nav justify-content-center nav-underline testimonial-test"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-first-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-first"
                        type="button"
                        onClick={handleOne}
                        role="tab"
                        aria-controls="nav-first"
                        aria-selected="true"
                      >
                        <div className="testimonial-img text-center">
                          <img src={firtest} alt="first-img" />
                        </div>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-second-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-second"
                        type="button"
                        role="tab"
                        onClick={handleTwo}
                        aria-controls="nav-second"
                        aria-selected="false"
                      >
                        <div className="testimonial-img text-center">
                          <img src={sectest} alt="second-img" />
                        </div>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-third-tab"
                        data-bs-toggle="tab"
                        onClick={handleThree}
                        data-bs-target="#nav-third"
                        type="button"
                        role="tab"
                        aria-controls="nav-third"
                        aria-selected="false"
                      >
                        <div className="testimonial-img text-center">
                          <img src={thirtest} alt="third-img" />
                        </div>
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content mt-3" id="nav-tabContent ">
                    <div
                      className="tab-pane fade show active  justify-content-center"
                      id="nav-first"
                      role="tabpanel"
                      aria-labelledby="nav-first-tab"
                      tabIndex={0}
                    >
                      <p>
                        {test}
                      </p>
                      <h3>{cname}</h3>
                      <h6>Our Client</h6>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-second"
                      role="tabpanel"
                      aria-labelledby="nav-second-tab"
                      tabIndex={0}
                    >
                      <p>
                        {test}
                      </p>
                      <h3>{cname}</h3>
                      <h6>Our Client</h6>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-third"
                      role="tabpanel"
                      aria-labelledby="nav-third-tab"
                      tabIndex={0}
                    >
                      <p>
                        {test}
                      </p>
                      <h3>{cname}</h3>
                      <h6>Our Client</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* our project */}
     <section class="homeproject">
      
      <div className="container">
      <div class="home_project_title">
        <h3 class="text-center">OUR PROJECT</h3>
            <h1>Our Projects</h1>
          </div>
        <div className="row">
          
          <div className="col-md-6 col-lg-6  col-xl-3">
            
           <div className="project-img">
            <Link to="/project">
            <img src={bedpr}/>
            </Link>
            <h6>BEDROOM</h6>
           </div>
          </div>
          <div className="col-md-6 col-lg-6  col-xl-3">
          <div className="project-img">
          <Link to="/project">
            <img src={bathpr}/>
            </Link>
            <h6>KITCHEN</h6>
           </div>
            </div>
            <div className="col-md-6 col-lg-6  col-xl-3">
            <div className="project-img">
            <Link to="/project">
            <img src={kitchenpr}/>
            </Link>
            <h6>BATHROOM</h6>
           </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 ">
            <div className="project-img">
            <Link to="/project">
            <img src={furniturepr}/>
            </Link>
            <h6>FURNIUTRE</h6>
           </div>
            </div>
        </div>
      </div>
    </section>
 {/* footer */}
 <section className="footer ">
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
  <script src="script.js"></script>
  </div>
  
  )
}

export default About