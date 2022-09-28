import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import tc from "../../img/tcpg.png";
import plp from "../../img/plp.png"
import tp from "../../img/tp.png"
import sf from "../../img/sf.png"
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
          <a href="https://github.com/Saksham-89/Website-Blocker" target="__blank">
            <img src={Sidebar} alt="Website Blocker To Stop Procrastination" />
            <br/>
            <span id='sm1'>Website Blocker To Stop Procrastination</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.freecodecamp.org/certification/fccba777ccb-50a4-447c-82d7-10f077f91337/responsive-web-design" target="__blank">
            <img src={Ecommerce} alt="Web Development Certificate from FreeCodeCampe" />
            <br/>
            <span id='sm2'>Web Development Certificate </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://saksham-89.github.io/BlackJackGame/" target="__blank">
            <img src={MusicApp} alt="Basic Blackjack Game To Understand JavsScript" />
            <br/>
            <span id='sm3'>Basic Blackjack Game To Learn JavaScript</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://youtu.be/F4fvmBVFKGw" target="__blank">
            <img src={HOC} alt="Unreal Engine 5 Game Development" />
            <br/>
            <span id='sm4'>Unreal Engine 5 Game Development</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://saksham-89.github.io/Technical-Page/" target="__blank">
          <img src={tc} alt="Technical Page For FreeCodeCamp" />
          <br />
          <span id="sm4">Technical Page For FreeCodeCamp</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://saksham-89.github.io/Product-Landing-Page/" target="__blank">
            <img src={plp} alt="Product Landing Page For FreeCodeCamp" />
            <br />
            <span id="sm5">Product Landing Page For FreeCodeCamp</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Saksham-89/Tribute-Page" target="_blank">
            <img src={tp} alt="Tribute Page For FreeCodeCamp" />
            <br />
            <span id="sm6">Tribute Page For FreeCodeCamp</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Saksham-89/Survery-Form" target="_blank">
            <img src={sf} alt="Survey Form For FreeCodeCamp" />
            <br />
            <span id="sm6">Survey Form For FreeCodeCamp</span>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
