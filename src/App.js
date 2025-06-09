import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, config } from '@react-spring/web';
import city from './images/city.jpg';
import './App.css';
import Skills from './components/Skills.js';
import WhatIDo from './components/WhatIDo.js';
import Projects from './components/Projects.js'
import Contact from './components/Contact.js';

function App() {
  const pageref = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating animation for hero text
  const floatingAnimation = useSpring({
    transform: `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`,
    config: config.slow,
    loop: true
  });

  // Navbar background animation
  const navbarSpring = useSpring({
    background: currentSection > 0 
      ? 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.95) 100%)'
      : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
    backdropFilter: currentSection > 0 ? 'blur(20px)' : 'blur(10px)',
    borderBottom: currentSection > 0 ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
    config: config.gentle
  });

  const scrollToSection = (section) => {
    setCurrentSection(section);
    pageref.current.scrollTo(section);
  };

  return (
    <>
      <animated.div 
        className="navbar"
        style={{
          ...navbarSpring,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1rem 2rem',
          transition: 'all 0.3s ease'
        }}
      >
        <ul className="list-bar" style={{
          listStyle: "none",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
          margin: 0,
          padding: 0,
          fontWeight: '500',
          letterSpacing: '1px'
        }}>
          {['Home', 'About', 'What I Do', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <li 
              key={item}
              onClick={() => scrollToSection(index)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                background: currentSection === index 
                  ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                  : 'transparent',
                boxShadow: currentSection === index 
                  ? '0 8px 32px rgba(102, 126, 234, 0.3)'
                  : 'none',
                transform: currentSection === index ? 'translateY(-2px)' : 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                if (currentSection !== index) {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentSection !== index) {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </animated.div>

      <Parallax pages={6.2} ref={pageref}>
        {/* Animated background layers */}
        <ParallaxLayer 
          offset={0} 
          speed={0.1} 
          style={{
            background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
            zIndex: -3
          }} 
        />
        
        <ParallaxLayer 
          offset={0} 
          speed={0.2} 
          style={{
            backgroundImage: `url(${city})`,
            backgroundSize: "cover",
            backgroundPosition: 'center',
            zIndex: -2,
            filter: 'brightness(0.7) contrast(1.2)',
            transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 10}px)`
          }} 
        />

        {/* Floating particles overlay */}
        <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: -1 }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
            `,
            animation: 'float 6s ease-in-out infinite'
          }} />
        </ParallaxLayer>

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0.4} onClick={() => scrollToSection(1)}>
          <div style={{ 
            color: "white", 
            textAlign: "center", 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            zIndex: 10
          }}>
            <animated.div style={floatingAnimation}>
              <h1 style={{ 
                fontSize: "4rem",
                fontWeight: "700",
                background: "linear-gradient(45deg, #fff, #f0f0f0)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(255,255,255,0.5)",
                marginBottom: "1rem",
                letterSpacing: "2px"
              }}>
                HELLO WORLD
              </h1>
              <p style={{
                fontSize: "1.2rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}>
                Welcome to my digital universe where code meets creativity
              </p>
            </animated.div>
            
            <div style={{
              marginTop: "3rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center"
            }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection(1);
                }}
                style={{
                  padding: "1rem 2rem",
                  background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                  borderRadius: "50px",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                  transition: "all 0.3s ease",
                  transform: "translateY(0)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.4)";
                }}
              >
                Explore My Work
              </button>
            </div>
          </div>
        </ParallaxLayer>

        {/* About Section */}
        <ParallaxLayer offset={1} speed={0.4} onClick={() => scrollToSection(2)}>
          <div className="container" style={{ 
            textAlign: "center", 
            color: "black",
            padding: "100px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.9) 100%)",
            backdropFilter: "blur(20px)",
            margin: "2rem",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}>
            <h2 style={{
              fontSize: "3rem",
              marginBottom: "2rem",
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "700"
            }}>
              About Me
            </h2>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#333"
            }}>
              I'm Narasimha, and if you're reading this, it's probably because you need someone who's great at coding but also knows how to keep things interesting (and maybe add a little humor to your day). I'm currently diving deep into the world of machine learning and algorithms, but honestly, my true talent might be explaining complex tech in a way that even my grandma would understand (she's still trying to figure out Facebook).
              <br /><br />
              I'm not just about writing clean code, I'm also about bringing that extra "oomph" to your project. I'm broke right now, so this is my official "hire me" plea – you can help me buy coffee, and I'll help you build something amazing. If you're looking for someone who's passionate, driven, and can crack a joke while debugging, I'm your guy. Let's make something awesome together!
            </p>
          </div>
        </ParallaxLayer>

        {/* What I Do Section */}
        <ParallaxLayer offset={2} speed={0.4} factor={1.5} onClick={() => scrollToSection(3)}>
          <WhatIDo pagereferance={pageref}/>
        </ParallaxLayer>

        {/* Skills Section */}
        <ParallaxLayer offset={3} speed={0.2} onClick={() => scrollToSection(4)}>
          <div style={{
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            minHeight: "100vh",
            position: "relative"
          }}>
            <Skills />
          </div>
        </ParallaxLayer>

        {/* Projects Section */}
        <ParallaxLayer offset={4} speed={0.3} style={{ 
          background: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)" 
        }} onClick={() => scrollToSection(5)}>
          <Projects />
        </ParallaxLayer>

        {/* Contact Section */}
        <ParallaxLayer offset={5} speed={0.4} style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white"
        }}>
          <Contact />
        </ParallaxLayer>
      </Parallax>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .navbar {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </>
  );
}

export default App;