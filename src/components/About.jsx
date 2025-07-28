import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";
import aboutImage from "../assets/about-image.jpg";

const About = () => {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img src={aboutImage} alt="About Mitteco" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <h2>About Mitteco</h2>
         <p>
          🌱 Mitteco is a green initiative dedicated to transforming homes and
          societies into eco-friendly spaces. We specialize in vermi composting,
          organic composting, and terrace farming solutions designed for both
          individual homes and housing societies.
        </p>
        <p>
          We don’t just set up systems — we maintain them and supply
          high-quality vermi compost to support ongoing sustainability. At
          Mitteco, our vision is simple but powerful: “Make every space count.
          Grow your own food. Heal the Earth.”
        </p>

        <p className="about-highlight">
          We believe that even the smallest balcony or terrace can become a
          source of fresh, chemical-free vegetables. Our mission is to help
          every household contribute to a sustainable Earth — one plant at a
          time..
        </p>

        {/* Location Section with Toggle */}
        <div className="about-locations">
          <h3>🌍 We Proudly Serve</h3>
          <div className="scrolling-cities">
            <div className="scroll-track">
              <span>
                Raipur · Bilaspur · Bhilai · Durg · Raigarh · Bhubaneswar ·
                Sambalpur · Balangir · Cuttack · Puri · Rourkela · Berhampur ·
                Bargarh ·
              </span>
              <span>
                Raipur · Bilaspur · Bhilai · Durg · Raigarh · Bhubaneswar ·
                Sambalpur · Balangir · Cuttack · Puri · Rourkela · Berhampur ·
                Bargarh ·
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
