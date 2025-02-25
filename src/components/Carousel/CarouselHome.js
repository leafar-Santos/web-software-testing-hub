import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./Carousel.css"
import BackHome from "../../assets/Carousel_images/BACK_HOME.png"

const Carrossel = () => {
  const settings = {
    dots: true,           // Habilita a navegação por pontos
    infinite: true,       // Habilita rotação infinita
    speed: 500,           // Velocidade de transição
    slidesToShow: 1,      // Quantos slides aparecem por vez
    slidesToScroll: 1,    // Quantos slides são rolados por vez
    autoplay: true,       // Ativa o autoplay
    autoplaySpeed: 2000,  // Intervalo entre os slides em milissegundos (2 segundos)
  
  };

  return (
    <div className="carrossel-container">
      <Slider {...settings}>
        <div>
          <img src={BackHome} alt="Slide 1" />
        </div>
        <div>
        <img src={BackHome} alt="Slide 2" />
        </div>
        <div>
        <img src={BackHome}  alt="Slide 3" />
        </div>
        <div>
        <img src={BackHome}  alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrossel;
