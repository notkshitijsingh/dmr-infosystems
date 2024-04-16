import React, {useRef} from 'react';

import Logo from './assets/dmr-logo.png';
import './App.css';

function App() {
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
          <span className="link-text">Home</span>
          <span className="link-text">Products</span>
          <span className="link-text">Services</span>
          <span className="link-text">About Us</span>
          <div className="button">Contact Us</div>
        </div>
      </div>
      <div className="home">
        <h3 style={{width:"100%", wordWrap:"normal"}}>
          DMR Infosystems has been serving and been associated with government nodal agencies and service registrar for the last ten years.
        </h3>
      </div>
    </div>
  );
}

export default App;
