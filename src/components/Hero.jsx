import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import heroImage from "../assets/mitteco-logo.jpg";
import heroVideo from "../assets/hero.mp4";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* 🔄 Fullscreen Video Background */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="hero-video-background"
      />

      {/* Left Text Content */}
      <div className="hero-left">
        <h1 className="typewriter-text">Greening Cities, Growing Futures</h1>

        <p className="mission-text">
          At Mitteco, we specialize in creating beautiful and productive terrace
          gardens for individual homes and residential societies.
        </p>
        <p className="mission-text1">
          Our mission is to turn unused spaces into thriving green zones that
          provide fresh, organic vegetables and fruits right at your doorstep.
          By promoting sustainable practices and smart use of urban space, we
          aim to reduce pollution, recycle waste, and help restore nature’s
          balance—one terrace at a time.
        </p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
        >
          Get Started
        </motion.button>
      </div>

      {/* Right Logo Card */}
      <motion.div
        className="hero-right fancy-logo-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="logo-blob-wrapper">
          <img src={heroImage} alt="Mitteco Logo" className="arch-logo" />
          <span className="blob blob1"></span>
          <span className="blob blob2"></span>
          <span className="blob blob3"></span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
