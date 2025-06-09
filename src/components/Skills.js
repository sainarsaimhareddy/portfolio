import React from "react";
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import dsa from '../images/dsa.jpg';
import javascript from '../images/javascript.jpg';
import python from '../images/python.jpg';
import git from '../images/git.jpg';
import machinelearning from '../images/machinelearning.jpg';
import computervision from '../images/computervision.jpg';

export default function Skills() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const containerAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        config: config.gentle,
        delay: 200
    });

    const skills = [
        { 
            name: "Python", 
            description: "Writes like English, runs like magic. Whether it's automating boring stuff or building the next AI overlord, Python's got your back (and your bugs).",
            image: python,
            stars: 4,
            color: "#3776ab"
        },
        { 
            name: "Javascript", 
            description: "The language that makes websites come alive — and occasionally scream in pain. Master of chaos, king of the console log.",
            image: javascript,
            stars: 3.5,
            color: "#f7df1e"
        },
        { 
            name: "React", 
            description: "Builds UI like LEGO blocks — just with more props and way fewer instructions. It's fast, reactive, and won't ghost you like jQuery did.",
            image: dsa,
            stars: 3.5,
            color: "#61dafb"
        },
        { 
            name: "Git", 
            description: "Because yelling 'why is my code broken?' is better with version control. Commit, push, pull — and hope nothing breaks.",
            image: git,
            stars: 4,
            color: "#f05032"
        },
        { 
            name: "Machine Learning", 
            description: "Teaches computers to think — kind of. Feed it enough data and it might just recommend you your own resume.",
            image: machinelearning,
            stars: 3.5,
            color: "#ff6b6b"
        },
        {
            name: "Computer Vision",
            description: "Helps computers 'see' the world — mostly so they can recognize cats, cars, and your face at the worst possible angles.",
            image: computervision,
            stars: 3,
            color: "#4ecdc4"
        }
    ];

    return (
        <animated.div ref={ref} style={{
            ...containerAnimation,
            padding: '6rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            minHeight: '100vh',
            position: 'relative'
        }}>
            {/* Floating background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite',
                zIndex: 0
            }} />
            
            <div style={{
                position: 'absolute',
                top: '60%',
                right: '15%',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite reverse',
                zIndex: 0
            }} />

            <h2 style={{ 
                fontSize: '3.5rem',
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
                position: 'relative',
                zIndex: 1
            }}>
                My Skills
            </h2>
            
            <p style={{
                fontSize: '1.2rem',
                color: '#666',
                marginBottom: '4rem',
                maxWidth: '600px',
                margin: '0 auto 4rem auto',
                position: 'relative',
                zIndex: 1
            }}>
                Technologies I love working with and the tools that help me bring ideas to life
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginTop: '2rem',
                position: 'relative',
                zIndex: 1
            }}>
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index}
                        name={skill.name}
                        description={skill.description}
                        image={skill.image}
                        stars={skill.stars}
                        color={skill.color}
                        delay={index * 100}
                    />
                ))}
            </div>
        </animated.div>
    );
}

function SkillCard({ name, description, image, stars, color, delay }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
        config: config.gentle,
        delay: delay
    });

    const hoverAnimation = useSpring({
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
        boxShadow: isHovered 
            ? `0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px ${color}20`
            : '0 10px 30px rgba(0,0,0,0.1)',
        config: config.wobbly
    });

    return (
        <animated.div
            ref={ref}
            style={{
                ...cardAnimation,
                ...hoverAnimation,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2rem',
                cursor: 'pointer',
                height: isHovered ? 'auto' : '350px',
                overflow: 'hidden',
                border: `2px solid ${color}20`,
                position: 'relative'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${color}, ${color}80)`,
                borderRadius: '20px 20px 0 0'
            }} />

            <div style={{
                height: '180px',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <img
                    src={image}
                    alt={name}
                    style={{ 
                        height: "100%", 
                        width: "100%", 
                        objectFit: "cover",
                        transition: 'transform 0.6s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${color}20, transparent)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }} />
            </div>

            <h3 style={{ 
                color: '#333', 
                fontWeight: '700',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                {name}
                <div style={{
                    width: '8px',
                    height: '8px',
                    background: color,
                    borderRadius: '50%',
                    boxShadow: `0 0 10px ${color}50`
                }} />
            </h3>

            {/* Star Rating */}
            <div style={{ marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                    <span key={i} style={{
                        color: i < Math.floor(stars) ? color : '#ddd',
                        fontSize: '1.2rem',
                        marginRight: '2px'
                    }}>
                        ★
                    </span>
                ))}
                <span style={{ 
                    marginLeft: '0.5rem', 
                    color: '#666',
                    fontSize: '0.9rem'
                }}>
                    {stars}/5
                </span>
            </div>

            {isHovered && (
                <animated.div style={{
                    animation: 'fadeIn 0.3s ease'
                }}>
                    <p style={{ 
                        color: '#555', 
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        marginBottom: '1rem'
                    }}>
                        {description}
                    </p>
                    
                    <div style={{
                        padding: '0.5rem 1rem',
                        background: `linear-gradient(45deg, ${color}10, ${color}05)`,
                        borderRadius: '10px',
                        border: `1px solid ${color}20`,
                        fontSize: '0.8rem',
                        color: '#666'
                    }}>
                        Proficiency: {stars * 20}%
                    </div>
                </animated.div>
            )}
        </animated.div>
    );
}