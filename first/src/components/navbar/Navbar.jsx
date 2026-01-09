import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <ul style={styles.menu}>
        <li style={styles.item}>Home</li>
        <li style={styles.item}>About</li>
        <li style={styles.item}>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#2c3e50",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
  item: {
    cursor: "pointer",
  },
};

export default Navbar;
