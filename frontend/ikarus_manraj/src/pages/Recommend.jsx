import React, { useState } from "react";
import axios from "axios";

const Recommend = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/recommend", {
        query,
        top_n: 4,
      });
      setResults(response.data.recommendations);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem 4rem" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", lineHeight: "1.2", color: "#2b2b2b" }}>
          Best Furniture <br /> For Your Home
        </h1>
        <p style={{ color: "#5a5a5a", fontSize: "1.1rem", marginTop: "1rem" }}>
          Discover timeless design and comfort for your perfect space.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Search for chairs, tables, sofas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "400px",
              padding: "14px 18px",
              borderRadius: "24px",
              border: "1px solid #d1c8b6",
              outline: "none",
              fontSize: "1rem",
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Recommendations */}
      {loading ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#6b6b6b" }}>
          Loading recommendations...
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {results.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffffcc",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                padding: "1rem",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <h3 style={{ marginTop: "1rem", fontFamily: "Playfair Display, serif" }}>
                {item.title}
              </h3>
              <p style={{ color: "#777", fontSize: "0.95rem" }}>{item.brand}</p>
              <p style={{ color: "#b08d57", fontWeight: "600" }}>{item.price || "—"}</p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommend;
