import React, {useRef, useState} from 'react';

import productsData from './productsData';
import servicesData from './servicesData';

import Stock from './assets/graph.jpg';
import Logo from './assets/dmr-logo.png';
import './App.css';

import AboutUs from './aboutus';

function App() {
  // reference variables for scroll
  const homeRef = useRef();
  const productsRef = useRef();
  const servicesRef = useRef();
  const aboutusRef = useRef();

  // product component
  function Product({data}){
    return(
      <div className="card">
        <span className="card-title">{data.name}</span><br/><br/>
        <span className="card-desc">{data.description}</span>
      </div>
    );
  }

  function ProductList() {
    return (
      <div className="card-container">
        {productsData.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
    );
  }

  function ServiceCard({ name, description }) {
    return (
      <div className="service-card">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextCard = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevCard = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
      );
    };

  // app render
  return (
    <div className="container">
      <div className="navbar">
        <div style={{flex: "1"}}>
          <img src={Logo} alt="DMR Infosystems" style={{width: "12vw", marginLeft: "1vw"}}/>
        </div>
        <div className="navbar-links">
        <span 
            className="link-text" 
            onClick={()=>homeRef.current.scrollIntoView({ behavior: "smooth" })}>
              Home
          </span>
          <span 
            className="link-text" 
            onClick={()=>productsRef.current.scrollIntoView({ behavior: "smooth" })}>
              Products
          </span>
          <span 
            className="link-text" 
            onClick={()=>servicesRef.current.scrollIntoView({ behavior: "smooth" })}>
              Services
          </span>
          <span 
            className="link-text" 
            onClick={()=>aboutusRef.current.scrollIntoView({ behavior: "smooth" })}>
              About Us
          </span>
          <div className="button">Contact Us</div>
        </div>
      </div>
        <h3 className="quote" ref={homeRef}>
          DMR Infosystems has been serving and been associated with government nodal agencies and service registrar for the last ten years.
        </h3>
        <img src={Stock} alt="Stock" style={{width: "100vw", height: "78vh"}}/>
        <div className="products-page" ref={productsRef}>
          <span className="section-title">Products</span>
          <ProductList/>
        </div>
        <div className="services-page" ref={servicesRef}>
        <span className="section-title">Services</span>
          <button className="directionBtn" onClick={prevCard}>↑</button>
          <ServiceCard {...servicesData[currentIndex]}/>
          <button className="directionBtn" onClick={nextCard}>↓</button>
        </div>
        <div className="aboutus-page" ref={aboutusRef}>
          <AboutUs />
        </div>
    </div>
  );
}

export default App;
