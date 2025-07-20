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
          🌱 We bring green life back to concrete cities. What began as a
          passion for nature and sustainable living has grown into a movement
          transforming unused terraces into thriving gardens of organic
          vegetables, fruits, and greenery.
        </p>
        <p>
          We provide complete terrace gardening solutions—from setting up garden
          infrastructure to planting, maintenance, and harvesting. Whether for
          individual homes or housing societies.
        </p>

        <p className="about-highlight">
          Join us in making your city greener—one terrace at a time.
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
