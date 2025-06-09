import React from "react";
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import github from "../images/github.png";
import instagram from "../images/instagram.png";

export default function Contact() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const containerAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        config: config.gentle,
        delay: 200
    });

    const socialIconAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.8)',
        config: config.wobbly,
        delay: 600
    });

    return (
        <animated.div ref={ref} style={{
            ...containerAnimation,
            textAlign: "center",
            padding: "4rem 2rem",
            maxWidth: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            overflow: "hidden"
        }}>
            {/* Floating background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '150px',
                height: '150px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite'
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '15%',
                width: '200px',
                height: '200px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                animation: 'float 10s ease-in-out infinite reverse'
            }} />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '5%',
                width: '100px',
                height: '100px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
            }} />

            <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '30px',
                padding: '3rem',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                maxWidth: '600px',
                width: '100%',
                position: 'relative',
                zIndex: 2
            }}>
                <h1 style={{
                    fontSize: "4rem",
                    marginBottom: "1.5rem",
                    background: "linear-gradient(45deg, #fff, #f0f0f0)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 30px rgba(255,255,255,0.5)",
                    fontWeight: "700",
                    letterSpacing: "2px"
                }}>
                    Contact Me
                </h1>

                <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '2rem',
                    borderRadius: '20px',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <p style={{
                        fontSize: "1.2rem",
                        color: "white",
                        lineHeight: "1.8",
                        marginBottom: "1rem",
                        fontWeight: "300"
                    }}>
                        Whether you want to collaborate, hire me, or just send a meme — feel free to reach out!
                    </p>
                    <p style={{
                        fontSize: "1rem",
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: "1.6",
                        fontStyle: "italic"
                    }}>
                        I promise I'll reply faster than a JavaScript function in the call stack.
                    </p>
                </div>

                <animated.div style={{
                    ...socialIconAnimation,
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center",
                    marginBottom: "2rem"
                }}>
                    <SocialIcon 
                        href="https://github.com/yourusername" 
                        src={github} 
                        alt="GitHub"
                        color="#333"
                    />
                    <SocialIcon 
                        href="https://instagram.com/yourusername" 
                        src={instagram} 
                        alt="Instagram"
                        color="#E4405F"
                    />
                </animated.div>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}>
                    <ContactButton 
                        text="Send Email"
                        onClick={() => window.location.href = 'mailto:your.email@example.com'}
                        primary
                    />
                    <ContactButton 
                        text="Download CV"
                        onClick={() => {/* Add CV download logic */}}
                    />
                </div>

                <p style={{ 
                    color: "rgba(255,255,255,0.8)", 
                    fontSize: "1rem",
                    fontWeight: "300",
                    letterSpacing: "0.5px"
                }}>
                    Made with ❤️ by Narasimha. Dark themes, bright minds.
                </p>
            </div>
        </animated.div>
    );
}

function SocialIcon({ href, src, alt, color }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                padding: '1rem',
                background: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-5px) scale(1.1)' : 'translateY(0) scale(1)',
                boxShadow: isHovered 
                    ? '0 15px 40px rgba(0,0,0,0.2)' 
                    : '0 8px 25px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.2)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={src} 
                alt={alt} 
                style={{ 
                    width: "40px", 
                    height: "40px",
                    filter: "invert(1)", 
                    transition: "all 0.3s ease"
                }} 
            />
        </a>
    );
}

function ContactButton({ text, onClick, primary = false }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <button
            onClick={onClick}
            style={{
                padding: '1rem 2rem',
                background: primary 
                    ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)'
                    : 'transparent',
                border: primary 
                    ? 'none' 
                    : '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: primary
                    ? (isHovered ? '0 15px 40px rgba(255, 107, 107, 0.6)' : '0 10px 30px rgba(255, 107, 107, 0.4)')
                    : (isHovered ? '0 10px 30px rgba(255,255,255,0.2)' : 'none'),
                backdropFilter: primary ? 'none' : 'blur(10px)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </button>
    );
}