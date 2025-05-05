import react from "react";
import { useRef } from "react";
import './WhatIDo.css';
import learning from "./images/learning.jpg";
import blackcountry from "./images/blackcountry.jpg";
export default function WhatIDo({pagereferance}) {
    return (
        <>
        <div className="whatido">
        <div className="information">
  <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>I Am Narasimha</h1>
  
  <h2 style={{ color: '#ccc', fontSize: '1.5rem', marginBottom: '1rem' }}>
    A Full-Stack Developer & Machine Learning Enthusiast
  </h2>

  <p style={{ color: '#eee', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px' }}>
    I blend creativity with code to build clean, responsive, and functional web applications.
    From writing complex algorithms that try to predict the price of rice (yes, seriously)
    to debugging CSS like it’s a puzzle game, I enjoy solving problems that matter.
  </p>

  <p style={{ color: '#aaa', fontSize: '0.95rem', marginTop: '1rem' }}>
    Whether it's JavaScript, Python, or figuring out why my code worked yesterday and not today—
    I’m always ready for the next challenge.
  </p>

  <button 
  onClick={(e) => {
    e.stopPropagation()
    pagereferance.current.scrollTo(4)}
  }
  style={{
    marginTop: '2rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#00adb5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem'
  }}>
    Let’s Work Together
  </button>
</div>

  <div className="image-container">
    <img src={learning} alt="image" className="responsive-img" />
  </div>
</div>
        </>
    )
}