import React from "react";
import city from "./images/city.jpg";
import dsa from './images/dsa.jpg';
import javascript from './images/javascript.jpg';
import python from './images/python.jpg';
import git from './images/git.jpg';
import machinelearning from './images/machinelearning.jpg';
import computervision from './images/computervision.jpg';
export default function Skills() {
    const skills = [
        { 
            name: "Python", 
            description: "Writes like English, runs like magic. Whether it's automating boring stuff or building the next AI overlord, Python’s got your back (and your bugs).",
            image: python,
            stars:4
        },
        { 
            name: "Javascript", 
            description: "The language that makes websites come alive — and occasionally scream in pain. Master of chaos, king of the console log.",
            image: javascript,
            stars:3.5
        },
        { 
            name: "React", 
            description: "Builds UI like LEGO blocks — just with more props and way fewer instructions. It's fast, reactive, and won’t ghost you like jQuery did.",
            image: dsa,
            stars:3.5 // Replace with a React-specific image for accuracy
        },
        { 
            name: "Git", 
            description: "Because yelling 'why is my code broken?' is better with version control. Commit, push, pull — and hope nothing breaks.",
            image: git,
            stars:4 // Replace with Git logo or CLI meme image if desired
        },
        { 
            name: "Machine Learning", 
            description: "Teaches computers to think — kind of. Feed it enough data and it might just recommend you your own resume.",
            image: machinelearning,
            stars:3.5
        },
        {
            name: "Computer Vision",
            description: "Helps computers 'see' the world — mostly so they can recognize cats, cars, and your face at the worst possible angles.",
            image: computervision ,
            stars:3// or a better image if you have one
          }
    ];
    

    return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
            <h2 style={{ color: 'black' }}>My Skills</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
            }}>
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index}
                        name={skill.name}
                        description={skill.description}
                        image={skill.image}
                        stars={skill.stars}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillCard({ name, description, image ,stars}) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: 'black',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                cursor: 'pointer',
                height: isHovered ? 'auto' : '250px',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    height: '150px',
                    backgroundColor: '#ccc',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={image}
                    alt={name}
                    style={{ 
                        height: "100%", 
                        width: "100%", 
                        objectFit: "cover",
                        transition: 'transform 1s ease-in-out, box-shadow 0.5s',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                    }}
                />
            </div>
            <p style={{ color: 'white', fontWeight: 'bold' }}>{name}</p>
            {isHovered && (
                <p style={{ 
                    color: 'white', 
                    fontSize: '0.9rem',
                    animation: 'fadeIn 0.3s ease'
                }}>
                    {description}
                    <hr></hr>
                    {stars}
                </p>
            )}
        </div>
    );
}