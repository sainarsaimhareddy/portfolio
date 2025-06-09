import React from "react";
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './WhatIDo.css';
import learning from "../images/learning.jpg";

export default function WhatIDo({ pagereferance }) {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const textAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(-50px)',
        config: config.gentle,
        delay: 200
    });

    const imageAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px) scale(1)' : 'translateX(50px) scale(0.9)',
        config: config.gentle,
        delay: 400
    });

    return (
        <div ref={ref} className="whatido" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                left: '-50px',
                width: '200px',
                height: '200px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite'
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                animation: 'float 10s ease-in-out infinite reverse'
            }} />

            <animated.div className="information" style={{
                ...textAnimation,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                zIndex: 2
            }}>
                <h1 style={{ 
                    color: 'white', 
                    fontSize: '3.5rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(255,255,255,0.3)',
                    fontWeight: '700'
                }}>
                    I Am Narasimha
                </h1>
                
                <h2 style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.8rem', 
                    marginBottom: '2rem',
                    fontWeight: '300',
                    letterSpacing: '1px'
                }}>
                    A Full-Stack Developer & Machine Learning Enthusiast
                </h2>

                <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '2rem',
                    borderRadius: '15px',
                    marginBottom: '2rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <p style={{ 
                        color: '#f0f0f0', 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8', 
                        marginBottom: '1rem'
                    }}>
                        I blend creativity with code to build clean, responsive, and functional web applications.
                        From writing complex algorithms that try to predict the price of rice (yes, seriously)
                        to debugging CSS like it's a puzzle game, I enjoy solving problems that matter.
                    </p>

                    <p style={{ 
                        color: '#d0d0d0', 
                        fontSize: '1rem', 
                        lineHeight: '1.6'
                    }}>
                        Whether it's JavaScript, Python, or figuring out why my code worked yesterday and not today—
                        I'm always ready for the next challenge.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            pagereferance.current.scrollTo(5);
                        }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '600',
                            boxShadow: '0 10px 30px rgba(255, 107, 107, 0.4)',
                            transition: 'all 0.3s ease',
                            transform: 'translateY(0)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 15px 40px rgba(255, 107, 107, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.4)';
                        }}
                    >
                        Let's Work Together
                    </button>

                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            pagereferance.current.scrollTo(4);
                        }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'transparent',
                            color: 'white',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255,255,255,0.1)';
                            e.target.style.borderColor = 'rgba(255,255,255,0.6)';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        View Projects
                    </button>
                </div>
            </animated.div>

            <animated.div className="image-container" style={{
                ...imageAnimation,
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                    border: '3px solid rgba(255,255,255,0.2)'
                }}>
                    <img 
                        src={learning} 
                        alt="Learning and Development" 
                        className="responsive-img"
                        style={{
                            filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                            transition: 'transform 0.6s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                        }}
                    />
                    
                    {/* Overlay gradient */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
                        opacity: 0.7
                    }} />
                </div>
            </animated.div>
        </div>
    );
}