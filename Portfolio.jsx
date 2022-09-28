import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className="portfolio" id="portfolio">
      <title>Saksham's Portfolio</title>
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent </span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="http://google.com">
            <img src={Sidebar} alt="Website Blocker To Stop Procrastination" />
            <br/>
            <span id='sm1'>Website Blocker To Stop Procrastination</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Web Development Certificate from FreeCodeCampe" />
          <br/>
          <span id='sm2'>Web Development Certificate </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="Basic Blackjack Game To Understand JavsScript" />
          <br/>
          <span id='sm3'>Basic Blackjack Game To Learn JavaScript</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="Unreal Engine 5 Game Development" />
          <br/>
          <span id='sm4'>Unreal Engine 5 Game Development</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
