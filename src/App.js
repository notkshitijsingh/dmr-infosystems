import React, {useRef} from 'react';

import Stock from './assets/graph.jpg';
import Logo from './assets/dmr-logo.png';
import './App.css';

function App() {
  // reference variables for scroll
  const homeRef = useRef();
  const productsRef = useRef();
  const servicesRef = useRef();
  const aboutusRef = useRef();

  // product component
  function Product({data}){
    return(
      <div>
        <span>{data.name}</span>
        <span>{data.description}</span>
      </div>
    );
  }

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
          a
        </div>
        <div className="services-page" ref={servicesRef}>
          a
        </div>
        <div className="aboutus-page" ref={aboutusRef}>
          a
        </div>
    </div>
  );
}

export default App;
