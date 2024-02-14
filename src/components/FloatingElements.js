// FloatingElements.js
import React from 'react';
import '../App.css'; 

// FloatingElements.js adjustment for background integration
const FloatingElements = () => {
    return (
      <>
        <div className="floating-element" style={{ position: 'absolute', left: '10%', top: '20%' }}>🌸</div>
        <div className="floating-element" style={{ position: 'absolute', left: '30%', top: '50%' }}>🍃</div>
        <div className="floating-element" style={{ position: 'absolute', left: '50%', top: '10%' }}>🌺</div>
        <div className="floating-element" style={{ position: 'absolute', left: '70%', top: '40%' }}>🍂</div>
        <div className="floating-element" style={{ position: 'absolute', left: '90%', top: '30%' }}>🌼</div>
        {/* Adjust positions as necessary */}
      </>
    );
  };
  

export default FloatingElements;
