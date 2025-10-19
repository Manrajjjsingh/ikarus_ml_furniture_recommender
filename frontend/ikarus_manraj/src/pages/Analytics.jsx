import React, { useEffect, useState } from "react";
import axios from "axios";

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/analytics");
        setAnalytics(response.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6b6b6b",
          fontSize: "1.2rem",
        }}
      >
        Loading analytics data...
      </div>
    );
  }

  if (!analytics) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "5rem",
          color: "#a55",
        }}
      >
        Failed to load analytics data.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "4rem 6rem",
        background: "linear-gradient(180deg, #f9f7f3 0%, #e8e2da 100%)",
        minHeight: "100vh",
        color: "#3b3b3b",
      }}
    >
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2.8rem",
            color: "#2b2b2b",
          }}
        >
          Product Analytics Dashboard
        </h1>
        <p style={{ color: "#6b6b6b", fontSize: "1.1rem" }}>
          Gain insights into your furniture collection with real-time analytics.
        </p>
      </div>

      {/* Analytics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffffee",
            borderRadius: "18px",
            padding: "2rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.6rem",
              marginBottom: "0.5rem",
            }}
          >
            Total Products
          </h2>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#b08d57" }}>
            {analytics.total_products}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffffee",
            borderRadius: "18px",
            padding: "2rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.6rem",
              marginBottom: "0.5rem",
            }}
          >
            Average Price
          </h2>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#b08d57" }}>
            ${analytics.avg_price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Top Brands */}
      <div style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2rem",
            marginBottom: "1rem",
            borderBottom: "1px solid #d1c8b6",
            display: "inline-block",
          }}
        >
          🏷️ Top Brands
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {Object.entries(analytics.top_brands).map(([brand, count]) => (
            <div
              key={brand}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "1rem 1.2rem",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.3rem",
                }}
              >
                {brand}
              </p>
              <p style={{ color: "#777" }}>{count} items</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories */}
      <div>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2rem",
            marginBottom: "1rem",
            borderBottom: "1px solid #d1c8b6",
            display: "inline-block",
          }}
        >
          🪑 Top Categories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {Object.entries(analytics.top_categories).map(([category, count]) => (
            <div
              key={category}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "1rem 1.2rem",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "#3b3b3b",
                }}
              >
                {category.replace(/[\[\]']+/g, "")}
              </p>
              <p style={{ color: "#777" }}>{count} items</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
