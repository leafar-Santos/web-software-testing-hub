import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


//Paginas
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Viajante from './pages/Formularios/Viajante';


function App() {

  return (
    
    <div className="App">
    <BrowserRouter>
    <Header>

    </Header>
    
      <div className='container'>
      
        <Routes>
          <Route path='/web-software-testing-hub' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/viajante' element={<Viajante/>}></Route>
         
        </Routes>
      </div>
     
     
      </BrowserRouter>
      
    
      <Footer></Footer>
    </div>
  );
}

export default App;
