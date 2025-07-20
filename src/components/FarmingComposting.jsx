// FarmingComposting.jsx
import React from "react";
import { motion } from "framer-motion";
import "./FarmingComposting.css";
import terraceImg from "../assets/terrace-farming.jpg";
import compostImg from "../assets/composting.jpg";

const FarmingComposting = () => {
  return (
    <motion.section
      className="farming-composting-split"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="split-row">
        {/* Left: Terrace Farming */}
        <div className="split-box left-bg">
          <motion.div
            className="text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>Terrace Farming</h2>
            <p>
              Grow fresh food on your rooftops. Enhance your home’s climate
              efficiency while creating your own green paradise. Terrace gardens
              are perfect for eco-conscious city dwellers looking to reconnect
              with nature. With simple setup options like grow bags, raised
              beds, and drip irrigation systems, terrace farming is now more
              accessible and rewarding than ever.
            </p>
          </motion.div>
        </div>

        {/* Center Images */}
        <div className="center-image">
          <img
            src={terraceImg}
            alt="Terrace Farming"
            className="hover-effect"
          />
          <img src={compostImg} alt="Composting" className="hover-effect" />
        </div>

        {/* Right: Composting */}
        <div className="split-box right-bg">
          <motion.div
            className="text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>Composting</h2>
            <p>
              Turn your kitchen waste into gold. Composting reduces landfill
              burden and revitalizes your soil with natural nutrients. At home,
              composting can be as simple as maintaining a bin for wet and dry
              waste. Over time, microbes break down this material into dark,
              earthy compost that boosts soil fertility, retains moisture, and
              supports healthy plant growth. Whether in a backyard, balcony, or
              small bin on a kitchen counter — every bit of composting makes a
              difference.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FarmingComposting;
