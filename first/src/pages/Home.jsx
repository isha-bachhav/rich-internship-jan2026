import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to MyApp 🚀</h1>
        <p style={styles.subtitle}>
          Building modern, fast, and user-friendly web applications with React.
        </p>
        <button style={styles.button}>Get Started</button>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>⚡ Fast</h3>
          <p>Optimized performance using modern React architecture.</p>
        </div>

        <div style={styles.card}>
          <h3>🎨 Clean UI</h3>
          <p>Simple, elegant, and responsive user interfaces.</p>
        </div>

        <div style={styles.card}>
          <h3>🔒 Secure</h3>
          <p>Built following best security and coding practices.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  hero: {
    height: "70vh",
    background: "linear-gradient(135deg, #1abc9c, #16a085)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
  },
  title: {
    fontSize: "48px",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "20px",
    maxWidth: "600px",
    marginBottom: "25px",
  },
  button: {
    padding: "12px 30px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#16a085",
    fontWeight: "bold",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "60px 40px",
    backgroundColor: "#f4f4f4",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    width: "250px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default Home;
