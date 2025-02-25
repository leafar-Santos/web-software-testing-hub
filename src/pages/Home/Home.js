import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CarouselHome from '../../components/Carousel/CarouselHome';

import './Home.css';

import Cadastro from "../../assets/home_images/Cadastro.png"
import LoginImage from "../../assets/home_images/LoginImage.png"


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* Seção de Apresentação */}
      <section className="presentation-section">
        <div className="presentation-content">
         <CarouselHome/>
        
        </div>
      </section>

      {/* Seção de Cards */}
      <section className="cards-section">
        <div className="card">
          <h3 className="card-title">Formulário de cadastro</h3>
          <img src={LoginImage}
            alt="Imagem do Card" 
            className="card-image"
            />

          <NavLink to="/viajante">
            <button className="access-button">
              Acessar
            </button>
          </NavLink>
        </div>

        <div className="card">
          <h3 className="card-title">Formulário de cadastro</h3>
          <img 
            src={Cadastro}
            alt="Imagem do Card" 
            className="card-image"
          />
          <NavLink to="/viajante">
            <button className="access-button">
              Acessar
            </button>
          </NavLink>
        </div>



        <div className="card">
          <h3 className="card-title">Formulário de cadastro</h3>
          <img 
            src={Cadastro}
            alt="Imagem do Card" 
            className="card-image"
          />
          <NavLink to="/viajante">
            <button className="access-button">
              Acessar
            </button>
          </NavLink>
        </div>


        <div className="card">
          <h3 className="card-title">Formulário de cadastro</h3>
          <img 
            src={Cadastro}
            alt="Imagem do Card" 
            className="card-image"
          />
          <NavLink to="/viajante">
            <button className="access-button">
              Acessar
            </button>
          </NavLink>
        </div>
        
      </section>

    </div>

    
  );
};

export default Home;
