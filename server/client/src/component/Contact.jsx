import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import momlogo from '../assets/mom-logo.png'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { toast } from 'react-toastify';
import './style.css'
function Contact() {
  const [email, setEmail] = useState('')
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('');
  const [mobile,setMobile]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch(`${window.location.origin}/contact`,{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        fname:fname,
        lname:lname,
        mobile:mobile,
        subject:subject,
        message:message
      })
    })
    const fresult=await res.json();
    if(fresult.success)
      {
        toast.success("Reach to you very shortly");
      
        setEmail("")
        setFname("");
        setLname("");
        setMessage("");
        setMobile("");
        setSubject("")
      }
      else{
        toast.error("Something went wrong");
        console.log("wrong")
      }
  }
  const handlenews=async(e)=>{
    e.preventDefault();
    const res=await fetch('http://localhost:5000/newslater',{
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
    
        toast.success("Sent Success")
      }
  }
  return (
    <div><>
    
    {/* end navbar Area */}
    {/* contact banner */}
    <section className="contact-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-description">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* map */}
    <section className="map-location mt-0">
      <div className="map ">
        <iframe
          className="map-img"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59862.93478709511!2d76.97062701787804!3d28.403113202186493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1758b06381b5%3A0x708beaee0d7d341b!2sMOM%20Homes!5e0!3m2!1sen!2sin!4v1715243078605!5m2!1sen!2sin"
          width={800}
          height={600}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div
        tabIndex={0}
        aria-label="Map"
        aria-roledescription="map"
        role="region"
        aria-describedby="95E45E28-27F5-4CEA-95E4-D5E5DDD830AC"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          padding: 0,
          borderWidth: 0,
          margin: 0,
          left: 0,
          top: 0
        }}
      >
        <div
          id="95E45E28-27F5-4CEA-95E4-D5E5DDD830AC"
          style={{ display: "none" }}
        >
          <div className="LGLeeN-keyboard-shortcuts-view">
            <table>
              <tbody>
                <tr>
                  <td>
                    <kbd aria-label="Left arrow">←</kbd>
                  </td>
                  <td aria-label="Move left.">Move left</td>
                </tr>
                <tr>
                  <td>
                    <kbd aria-label="Right arrow">→</kbd>
                  </td>
                  <td aria-label="Move right.">Move right</td>
                </tr>
                <tr>
                  <td>
                    <kbd aria-label="Up arrow">↑</kbd>
                  </td>
                  <td aria-label="Move up.">Move up</td>
                </tr>
                <tr>
                  <td>
                    <kbd aria-label="Down arrow">↓</kbd>
                  </td>
                  <td aria-label="Move down.">Move down</td>
                </tr>
                <tr>
                  <td>
                    <kbd>+</kbd>
                  </td>
                  <td aria-label="Zoom in.">Zoom in</td>
                </tr>
                <tr>
                  <td>
                    <kbd>-</kbd>
                  </td>
                  <td aria-label="Zoom out.">Zoom out</td>
                </tr>
                <tr>
                  <td>
                    <kbd>Home</kbd>
                  </td>
                  <td aria-label="Jump left by 75%.">Jump left by 75%</td>
                </tr>
                <tr>
                  <td>
                    <kbd>End</kbd>
                  </td>
                  <td aria-label="Jump right by 75%.">Jump right by 75%</td>
                </tr>
                <tr>
                  <td>
                    <kbd>Page Up</kbd>
                  </td>
                  <td aria-label="Jump up by 75%.">Jump up by 75%</td>
                </tr>
                <tr>
                  <td>
                    <kbd>Page Down</kbd>
                  </td>
                  <td aria-label="Jump down by 75%.">Jump down by 75%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    {/* contact area */}
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-4 ">
            <div className="contact-info  pb-4">
              <div className="map-icon-svg">
                <svg
                  viewBox="0 0 24 24"
                  height="2.4rem"
                  width="2.4rem"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
              <div className="office-address pt-3">
                <h5 style={{ color: "#df8133" }}>OfficeAddress</h5>
                <p className="text-center">
                  1, Jotram Chowk, opposite ROF Atulyas, Sector 93, Gurugram,
                  Haryana 122505
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-4 ">
            <div className="contact-info  pb-4">
              <div className="hours-icon-svg">
                <svg
                  viewBox="0 0 24 24"
                  height="2.4rem"
                  width="2.4rem"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 7V12L9.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
              <div className="work-hour  pt-3">
                <h5 style={{ color: "#df8133" }}>Working Hours</h5>
                <p className="text-center">
                  Monday to Saturday 9:00am to 9:30pm Sunday 12:00pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-4 ">
            <div className="contact-info  pb-4">
              <div className="message-icon">
                <svg
                  viewBox="0 0 24 24"
                  height="2.4rem"
                  width="2.4rem"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
              <div className="message-email  pt-3">
                <h5 style={{ color: "#df8133" }}>Message Us</h5>
                <p>support@Momhomes.in</p>
                <p> momhomesid@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* contact area end */}
    <section className="form-section">
      <div className="container">
        <div className="contact-heading text-center">
          <h4>CONTACT FORM</h4>
          <p>Get A Quet</p>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <form onSubmit={handlesubmit}>
              <div classs="group-form ">
                <div className="upper-input  d-md-flex ">
                  <input
                    type="text"
                    name="firstName"
                    id="name"
                    onChange={(e)=>setFname(e.target.value)}
                    value={fname}
                    defaultValue=""
                    placeholder="First Name:"
                  />
                  <input
                    type="text"
                    name="LastName"
                    id="name"
                    value={lname}
                    onChange={(e)=>setLname(e.target.value)}
                    defaultValue=""
                    placeholder="Last Name:"
                  />
                </div>
                <div className="bottom-input  d-md-flex ">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="email"
                    defaultValue=""
                    placeholder="Email:"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    id="phone"
                    defaultValue=""
                    placeholder="Phone:"
                  />
                </div>
                <div className="middle-input  ">
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                    id="subject"
                    defaultValue=""
                    placeholder="Subject:"
                  />
                </div>
                <div className="message-wrap mt-4 ">
                  <textarea
                    name="message"
                    value={message}
                    id="comment-message"
                    onChange={(e)=>setMessage(e.target.value)}
                    rows={12}
                    placeholder="Write Comment"
                    required="required"
                    defaultValue={""}
                  />
                </div>
                <div className="contact-btn  ">
                  <button
                    name="submit"
                    type="submit"
                    className="submit btn-contact hv-linear border-corner"
                    id="submit"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
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
                <p>Mom Homes ,Sector 93,Gurugram,HR </p>
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

export default Contact