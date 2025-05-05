import React, { useState, useEffect,useRef} from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import city from './images/city.jpg';
import './App.css';
import Skills from './components/Skills.js/index.js';
import WhatIDo from './components/WhatIDo.js/index.js';
function App() {
  const pageref=useRef(null);
  return (
    <>
      <div className="navbar">
        <ul className="list-bar" style={{
          listStyle: "none",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
          textDecoration: "none",
          color: "black",
          cursor: "pointer",
          padding: "20px",
          position: "fixed",
          width: "100%",
          zIndex: 10
        }}>
          <li onClick={()=>pageref.current.scrollTo(0)}>Home</li>
          <li onClick={() => pageref.current.scrollTo(2)}>About</li>
          <li onClick={() => pageref.current.scrollTo(3)}>skills</li>
          <li onClick={() => pageref.current.scrollTo(4)}>projects</li>
        </ul>
      </div>

      <Parallax pages={5} ref={pageref}>
        <ParallaxLayer offset={0} speed={0.2} sticky={{ start: 0, end: 1 }} style={{
          backgroundImage: `url(${city})`,
          backgroundSize: "cover",
          zIndex: -1,
          transition: "background-image 1s ease-in-out"
        }} ><hr></hr></ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} onClick={() => pageref.current.scrollTo(1)}>
          <div style={{ color: "black", textAlign: "center", position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <h1 style={{ color: "black" }}>HELLO WORLD</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4} onClick={() => pageref.current.scrollTo(2)}>
          <div className="container" style={{ textAlign: "center", color: "black",padding: "100px"}}>
            <p>
              I’m Narasimha, and if you're reading this, it's probably because you need someone who’s great at coding but also knows how to keep things interesting (and maybe add a little humor to your day). I’m currently diving deep into the world of machine learning and algorithms, but honestly, my true talent might be explaining complex tech in a way that even my grandma would understand (she's still trying to figure out Facebook).
              <br /><br />
              I’m not just about writing clean code, I’m also about bringing that extra "oomph" to your project. I’m broke right now, so this is my official "hire me" plea – you can help me buy coffee, and I’ll help you build something amazing. If you’re looking for someone who’s passionate, driven, and can crack a joke while debugging, I’m your guy. Let’s make something awesome together!
            </p>
          </div>
          
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.4} factor={1.5} onClick={() => pageref.current.scrollTo(3)}>
            <WhatIDo pagereferance={pageref}/>
           </ParallaxLayer>
           <ParallaxLayer offset={3} speed={0.2} onClick={() => pageref.current.scrollTo(0)}>
          <Skills />
         </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
