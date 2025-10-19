import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 4rem",
        backgroundColor: "transparent",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(8px)",
      }}
    >
      <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.8rem", color: "#3b3b3b" }}>
        Furniture
      </h1>

      <div style={{ display: "flex", gap: "2rem", fontWeight: 500 }}>
        <Link to="/" style={{ textDecoration: "none", color: "#3b3b3b" }}>Home</Link>
        <Link to="/recommend" style={{ textDecoration: "none", color: "#3b3b3b" }}>Products</Link>
        <Link to="/analytics" style={{ textDecoration: "none", color: "#3b3b3b" }}>Analytics</Link>
      </div>
    </nav>
  );
};

export default Navbar;
