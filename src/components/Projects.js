import React, { useState } from "react";
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import "./projects.css";

export default function Projects() {
  const [count, setCount] = useState(0);
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

  const projectsData = [
    {
      projectTitle: "KNN Recommendation System",
      description: "A content-based filtering system that recommends items to users based on the similarity of preferences using the K-Nearest Neighbors algorithm.",
      languagesUsed: ["Python"],
      toolsAndLibraries: ["scikit-learn", "Pandas", "NumPy"],
      problemSolved: "Helps users discover new items similar to those they liked before, without relying on other users' behavior.",
      coreFeatures: [
        "User-based and item-based similarity comparison",
        "Dynamic recommendation updates with user interaction",
        "Distance metric tuning (cosine, Euclidean, etc.)"
      ],
      learningOutcome: "Gained hands-on experience with distance-based machine learning models and preprocessing techniques for sparse datasets.",
      projectDuration: "2 weeks",
      githubLink: "https://github.com/yourusername/knn-recommender",
      color: "#667eea"
    },
    {
      projectTitle: "Matrix Factorization for Collaborative Filtering",
      description: "A recommender system using matrix decomposition techniques like SVD to learn latent user-item interactions for accurate predictions.",
      languagesUsed: ["Python"],
      toolsAndLibraries: ["NumPy", "Pandas", "Surprise"],
      problemSolved: "Predicts missing user ratings and suggests new items based on collaborative behavior in large, sparse datasets.",
      coreFeatures: [
        "Low-rank matrix factorization",
        "Model evaluation using RMSE and MAE",
        "Hyperparameter tuning (latent factors, regularization)"
      ],
      learningOutcome: "Deepened understanding of linear algebra in machine learning and collaborative filtering strategies.",
      projectDuration: "3 weeks",
      githubLink: "https://github.com/yourusername/matrix-factorization",
      color: "#764ba2"
    },
    {
      projectTitle: "Time Series Analysis for Price Prediction",
      description: "A project analyzing historical price data of agricultural commodities using statistical and deep learning models to forecast future prices.",
      languagesUsed: ["Python"],
      toolsAndLibraries: ["Pandas", "TensorFlow", "Matplotlib", "ARIMA"],
      problemSolved: "Enables farmers and traders to anticipate market prices and plan actions accordingly.",
      coreFeatures: [
        "ARIMA for linear trends and LSTM for nonlinear dependencies",
        "Seasonality and trend decomposition",
        "Data normalization and time-step windowing"
      ],
      learningOutcome: "Learned to combine statistical modeling with deep learning to handle real-world time series challenges.",
      projectDuration: "4 weeks",
      githubLink: "https://github.com/yourusername/timeseries-prediction",
      color: "#ff6b6b"
    },
    {
      projectTitle: "Optical Flow in Computer Vision",
      description: "A computer vision project that tracks motion across video frames using classical optical flow algorithms for dynamic scene analysis.",
      languagesUsed: ["Python"],
      toolsAndLibraries: ["OpenCV"],
      problemSolved: "Estimates motion in surveillance, robotics, or AR applications by understanding pixel movement over time.",
      coreFeatures: [
        "Lucas-Kanade and Farneback implementations",
        "Real-time video stream analysis",
        "Motion vector visualization"
      ],
      learningOutcome: "Mastered frame-based motion estimation techniques and gained insights into computer vision fundamentals.",
      projectDuration: "1.5 weeks",
      githubLink: "https://github.com/yourusername/optical-flow",
      color: "#4ecdc4"
    },
    {
      projectTitle: "Real-Time Face Detection",
      description: "Developed a system that detects faces in live camera feeds using Haar Cascades and DNN modules, ensuring fast and reliable detection.",
      languagesUsed: ["Python"],
      toolsAndLibraries: ["OpenCV", "DNN module"],
      problemSolved: "Enables face-based authentication, attendance tracking, or emotion detection in real-time environments.",
      coreFeatures: [
        "Haar cascade and deep learning detection",
        "Frame capture and face bounding boxes",
        "Face region extraction for further processing"
      ],
      learningOutcome: "Built confidence in using classical and neural-network-based vision algorithms for real-time apps.",
      projectDuration: "1 week",
      githubLink: "https://github.com/yourusername/face-detection",
      color: "#f39c12"
    },
    {
      projectTitle: "Interactive Portfolio with React",
      description: "A modern developer portfolio that features project showcases, parallax scrolling effects, and responsive design built using React.",
      languagesUsed: ["JavaScript"],
      toolsAndLibraries: ["React", "@react-spring/parallax", "CSS"],
      problemSolved: "Presents personal and professional work in a visually compelling, interactive way to attract employers or collaborators.",
      coreFeatures: [
        "Dark theme with scroll-triggered animations",
        "Mobile-first responsive layout",
        "Modular code structure with reusable components"
      ],
      learningOutcome: "Refined front-end development skills and learned animation principles for UX/UI enhancement.",
      projectDuration: "2 weeks",
      githubLink: "https://github.com/yourusername/react-portfolio",
      color: "#9b59b6"
    }
  ];

  const cardAnimation = useSpring({
    transform: `rotateY(${count * 0.5}deg)`,
    config: config.gentle
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setCount(prev => (prev + 1) % projectsData.length);
  };

  const currentProject = projectsData[count];

  return (
    <animated.div ref={ref} className="Main-continer" style={{
      ...containerAnimation,
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: `linear-gradient(45deg, ${currentProject.color}20, transparent)`,
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: `linear-gradient(45deg, ${currentProject.color}10, transparent)`,
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      <div style={{
        textAlign: 'center',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '3.5rem',
          fontWeight: '700',
          background: `linear-gradient(45deg, ${currentProject.color}, #fff)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(255,255,255,0.3)',
          marginBottom: '1rem'
        }}>
          My Projects
        </h1>
        
        <p style={{
          color: '#ccc',
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Click on the card to explore different projects
        </p>
      </div>

      <animated.div 
        className="card-holder" 
        onClick={handleClick}
        style={{
          ...cardAnimation,
          background: `linear-gradient(135deg, 
            rgba(255,255,255,0.05) 0%, 
            rgba(255,255,255,0.02) 50%,
            ${currentProject.color}10 100%)`,
          backdropFilter: 'blur(20px)',
          border: `2px solid ${currentProject.color}30`,
          borderRadius: '25px',
          boxShadow: `
            0 25px 60px rgba(0,0,0,0.3),
            0 0 0 1px ${currentProject.color}20,
            inset 0 1px 0 rgba(255,255,255,0.1)
          `,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
          e.currentTarget.style.boxShadow = `
            0 35px 80px rgba(0,0,0,0.4),
            0 0 0 1px ${currentProject.color}40,
            inset 0 1px 0 rgba(255,255,255,0.2)
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = `
            0 25px 60px rgba(0,0,0,0.3),
            0 0 0 1px ${currentProject.color}20,
            inset 0 1px 0 rgba(255,255,255,0.1)
          `;
        }}
      >
        {/* Top gradient bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${currentProject.color}, ${currentProject.color}80)`
        }} />

        {/* Project counter */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '2rem',
          background: `${currentProject.color}20`,
          color: currentProject.color,
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: '600',
          border: `1px solid ${currentProject.color}30`
        }}>
          {count + 1} / {projectsData.length}
        </div>

        <div style={{ padding: '2rem' }}>
          <h1 style={{ 
            color: 'white',
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            fontWeight: '700',
            textShadow: `0 0 20px ${currentProject.color}50`
          }}>
            {currentProject.projectTitle}
          </h1>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '1.5rem',
            borderRadius: '15px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p style={{ 
              color: '#e0e0e0',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              {currentProject.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <InfoCard 
              title="Languages" 
              content={currentProject.languagesUsed.join(", ")}
              color={currentProject.color}
            />
            <InfoCard 
              title="Tools & Libraries" 
              content={currentProject.toolsAndLibraries.join(", ")}
              color={currentProject.color}
            />
          </div>

          <InfoCard 
            title="Problem Solved" 
            content={currentProject.problemSolved}
            color={currentProject.color}
            fullWidth
          />

          <InfoCard 
            title="Core Features" 
            content={currentProject.coreFeatures.join(" • ")}
            color={currentProject.color}
            fullWidth
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <InfoCard 
              title="Duration" 
              content={currentProject.projectDuration}
              color={currentProject.color}
            />
            <InfoCard 
              title="Learning Outcome" 
              content={currentProject.learningOutcome}
              color={currentProject.color}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: `linear-gradient(45deg, ${currentProject.color}, ${currentProject.color}80)`,
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                boxShadow: `0 10px 30px ${currentProject.color}40`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = `0 15px 40px ${currentProject.color}60`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 10px 30px ${currentProject.color}40`;
              }}
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
}

function InfoCard({ title, content, color, fullWidth = false }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      padding: '1rem',
      borderRadius: '10px',
      border: `1px solid ${color}20`,
      marginBottom: fullWidth ? '1rem' : '0',
      gridColumn: fullWidth ? '1 / -1' : 'auto'
    }}>
      <h4 style={{
        color: color,
        fontSize: '0.9rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {title}
      </h4>
      <p style={{
        color: '#ccc',
        fontSize: '0.95rem',
        lineHeight: '1.5',
        margin: 0
      }}>
        {content}
      </p>
    </div>
  );
}