// ContactSection.jsx
import React, { useRef } from "react";
import "./ContactSection.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import formBg from "../assets/form-bg.jpg";

const ContactSection = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4y15sbz",
        "template_ky0hmb2", // Replace with your actual template ID
        formRef.current,
        "E7khFOG-CCHi3eop8" // Replace with your actual public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-wrapper" id="contact">
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Floating Card */}
        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            <FaMapMarkerAlt /> 123 Green Street, Eco City
          </div>
          <div>
            <FaPhoneAlt /> +91 70772 71235
          </div>
          <div>
            <FaClock /> Mon - Fri: 9am - 6pm
          </div>
        </motion.div>

        {/* Background Image + Form */}
        <motion.div
          className="form-container"
          style={{ backgroundImage: `url(${formBg})` }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="form-overlay">
            <h2>Contact Form</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                rows="4"
                placeholder="Comment or message"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
