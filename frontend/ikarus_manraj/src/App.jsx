import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recommend from "./pages/Recommend";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f9f7f4 0%, #f2ede9 100%)",
          color: "#2d2d2d",
        }}
      >
        {/* ✅ Global Navbar */}
        <Navbar />

        {/* ✅ Scrolls to top when changing pages */}
        <ScrollToTop />

        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<Recommend />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
