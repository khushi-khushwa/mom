import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import firstteam from '../assets/images/teams/firstteam.jpg'
import secondteam from '../assets/images/teams/secondteam.jpg'
import thirdteam from '../assets/images/teams/thirdteam.jpg'
import fourteam from '../assets/images/teams/fourteam.jpg'
import './style.css'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Hide next and prev buttons
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Auto-play speed in milliseconds
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <div>
          <img src={firstteam} alt="Slide 1" />
        </div>
        <div class="member-detail text-center">
                  <h5>Hunny Kaushik</h5>
                  <p>Designer</p>
                </div>
                </div>
        <div>
          <div>
          <img src={secondteam} alt="Slide 2" />
          </div>
          <div class="member-detail text-center">
                  <h5> Vinay Dutt</h5>
                  <p>  Sales Excutives</p>
                </div>
        </div>
        <div>
          <div>
          <img src={thirdteam}alt="Slide 3" />
          </div>
          <div class="member-detail text-center">
                  <h5> Nikhil kashyap</h5>
                  <p> Site Supervisor</p>
                </div>
        </div>
        <div>
        <div>
          <img src={fourteam}alt="Slide 3" />
        </div>
        <div class="member-detail text-center">
                  <h5>Minakshi</h5>
                  <p>Designer</p>
                </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;