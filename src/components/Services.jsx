import React from "react";
import terrace1 from "../assets/terrace-farming.jpg";
import terrace2 from "../assets/Terrace2.jpg";
import terrace3 from "../assets/Terrace3.jpg";
import terrace5 from "../assets/Terrace4.jpg";

import waste1 from "../assets/compost1.jpg";
import waste2 from "../assets/compost2.jpg";
import waste3 from "../assets/compost3.jpg";
import waste4 from "../assets/compost4.jpg";

import { motion } from "framer-motion";
import {
  FaSeedling,
  FaLeaf,
  FaTruckLoading,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaTools,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaSeedling />,
    title: "Composting Setup",
    description:
      "Eco-friendly composting systems for sustainable waste management.",
    image: terrace1,
  },
  {
    icon: <FaLeaf />,
    title: "Terrace Garden Design",
    description:
      "Custom green space design tailored to your terrace and lifestyle.",
    image: terrace2,
  },
  {
    icon: <FaTruckLoading />,
    title: "Organic Soil Supply",
    description:
      "Premium organic soil and natural fertilizers delivered to your home.",
    image: terrace3,
  },
  {
    icon: <FaHandsHelping />,
    title: "Plant Maintenance",
    description: "Regular care and maintenance to keep your garden thriving.",
    image: terrace2,
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Workshops & Training",
    description:
      "Hands-on learning sessions for composting and home gardening.",
    image: terrace5,
  },
  {
    icon: <FaTools />,
    title: "End-to-End Execution",
    description:
      "We handle everything from planning to planting and maintenance.",
    image: terrace3,
  },
];

const wasteServices = [
  {
    title: "Home Composting Setup",
    text: "Home composting setup (bins, DIY kits)",
    image: waste1,
  },
  {
    title: "Society Waste Setup",
    text: "Vermicomposting & aerobic pit setup for societies",
    image: waste2,
  },
  {
    title: "Segregation Systems",
    text: "Waste segregation systems",
    image: waste3,
  },
  {
    title: "Awareness Workshops",
    text: "Awareness & training workshops",
    image: waste4,
  },
  {
    title: "Compost Product Sales",
    text: "Compost product sales",
    image: waste1,
  },
];

const Services = () => {
  return (
    <motion.section
      className="services-section"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Terrace Farming Services */}
      <h2 className="services-heading">Our Terrace Farming Services</h2>
      <div className="services-grid terrace-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card full-image-card"
            key={index}
            style={{ backgroundImage: `url(${service.image})` }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="card-overlay">
              <div className="icon-wrapper">
                <div className="icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Waste Management Services */}
      <h2 className="services-heading">♻ Waste Management Services</h2>
      <div className="services-grid waste-grid">
        {wasteServices.map((item, index) => (
          <motion.div
            className="service-card full-image-card"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="card-overlay">
              <div className="icon-wrapper">
                <div className="icon">♻</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
