import react from "react";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
export default function Contact() {
    return (
        <>
         <div style={{
    textAlign: "center",
    padding: "2rem",
    maxWidth: "100%",
    height:"100vh"
  }}>
    <h1 style={{
      fontSize: "3rem",
      marginBottom: "1rem",
      textShadow: "0 0 15px rgba(255, 255, 255, 0.8)"
    }}>Contact Me</h1>
    <p style={{
      fontSize: "1.1rem",
      color: "white",
      lineHeight: "1.6",
      marginBottom: "2rem"
    }}>
      Whether you want to collaborate, hire me, or just send a meme — feel free to reach out!
      I promise I’ll reply faster than a JavaScript function in the call stack.
    </p>

    <div style={{
      display: "flex",
      gap: "2rem",
      justifyContent: "center",
    }}>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" style={{ width: "40px", filter: "invert(1)", transition: "transform 0.2s", cursor: "pointer" }} />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" style={{ width: "40px", filter: "invert(1)", transition: "transform 0.2s", cursor: "pointer" }} />
      </a>
    </div>

    <p style={{ marginTop: "2rem", color: "white", fontSize: "0.9rem" }}>
      Made with ❤️ by Narasimha. Dark themes, bright minds.
    </p>
  </div>
        </>
    )
}