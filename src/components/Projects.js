import React, { useState } from "react";
import "./projects.css";

export default function Projects() {
  const [count, setCount] = useState(0);
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
      githubLink: "https://github.com/yourusername/knn-recommender"
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
      githubLink: "https://github.com/yourusername/matrix-factorization"
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
      githubLink: "https://github.com/yourusername/timeseries-prediction"
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
      githubLink: "https://github.com/yourusername/optical-flow"
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
      githubLink: "https://github.com/yourusername/face-detection"
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
      githubLink: "https://github.com/yourusername/react-portfolio"
    }
  ];
  
  
const handleclick=(e)=>{
  e.stopPropagation()
  setCount(prev=>(prev+1)%projectsData.length)
}
  

  return (
    <div className="Main-continer" >
      <div className="card-holder" onClick={handleclick} >
        <h1 style={{ color: "white" ,paddingLeft:"2rem",paddingTop:"2rem", textShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)" }}>{projectsData[count].projectTitle}</h1>
        <p style={{ color: "white",paddingLeft:"2rem"}}>{projectsData[count].description}</p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>
          Languages used: {projectsData[count].languagesUsed.join(", ")}
        </p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>
          Languages used: {projectsData[count].languagesUsed.join(", ")}
        </p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>
          Tools and Libraries: {projectsData[count].toolsAndLibraries.join(", ")}
        </p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>Problem Solved: {projectsData[count].problemSolved}</p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>Core Features: {projectsData[count].coreFeatures.join(", ")}</p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>Learning Outcome: {projectsData[count].learningOutcome}</p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>Project Duration: {projectsData[count].projectDuration}</p>
        <p style={{ color: "white",paddingLeft:"2rem"}}>GitHub Link: {projectsData[count].githubLink}</p>
      </div>
    </div>
  );
}
