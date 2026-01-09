import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.text}>
        Welcome to our website! 🚀 We are passionate about building modern,
        user-friendly, and scalable web applications using the latest
        technologies.
      </p>

      <p style={styles.text}>
        Our goal is to create digital experiences that are simple, fast, and
        effective. Whether it's frontend design or full-stack development, we
        focus on clean code and great user experience.
      </p>

      <p style={styles.text}>
        Thank you for visiting our platform. We’re excited to grow, learn, and
        build amazing things together! 💻✨
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "15px",
  },
};

export default About;
