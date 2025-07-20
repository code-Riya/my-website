import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import "./Faqs.css";

const imagePairs = [
  {
    before: "/assets/faq-gallery/before1.jpg",
    after: "/assets/faq-gallery/after1.jpg",
  },
  {
    before: "/assets/faq-gallery/before2.jpg",
    after: "/assets/faq-gallery/after2.jpg",
  },
];

const faqs = [
  {
    question: "Will terrace farming cause leakage or damage to my roof?",
    answer:
      "No. We use protective layers like waterproofing sheets and grow bags to ensure your terrace remains fully safe and undamaged.",
  },
  {
    question: "What if my terrace doesn’t get full sunlight?",
    answer:
      "You can still grow many shade-tolerant plants like leafy greens, herbs, and certain vegetables. We’ll help design your garden based on the available light.",
  },
  {
    question: "How much maintenance does a terrace garden need?",
    answer:
      "With drip irrigation and seasonal planning, upkeep is simple. A few minutes a day is usually enough.",
  },
  {
    question: "Can I grow vegetables and fruits on my terrace?",
    answer:
      "Absolutely. From tomatoes and chilies to lemons and pomegranates — your terrace can become a thriving edible garden.",
  },
  {
    question: "Will composting smell bad?",
    answer:
      "Not if done correctly. A balanced mix of wet (green) and dry (brown) waste ensures there’s no foul odor.",
  },
  {
    question: "Do I need a lot of space to compost?",
    answer:
      "Not at all! You can compost in compact bins or balcony composters — perfect even for apartments.",
  },
  {
    question: "Is composting time-consuming?",
    answer:
      "It takes just a few minutes a day to separate your waste. Nature does the rest over a few weeks!",
  },
  {
    question: "Can I compost cooked food or meat?",
    answer:
      "For home composting, it’s best to avoid oily or cooked food, meat, and dairy — they attract pests.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
      if (!showAfter) {
        setCurrentPairIndex((prev) => (prev + 1) % imagePairs.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [showAfter]);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentImage = showAfter
    ? imagePairs[currentPairIndex].after
    : imagePairs[currentPairIndex].before;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4y15sbz",
        "template_ky0hmb2",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "E7khFOG-CCHi3eop8"
      )
      .then(
        () => {
          alert("Thank you! Your query has been sent.");
          setFormData({ name: "", email: "", message: "" });
          setShowQueryForm(false);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      className="faqs-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Triangle Background */}
      <div className="faq-triangle-background"></div>

      <div className="faq-layout">
        <div className="faq-image-card">
          <img
            src={currentImage}
            alt="Before and After"
            className="fade-image"
          />
        </div>

        <div className="faq-main">
          <h1 className="faq-heading">Frequently Asked Questions</h1>

          <div className="faq-search">
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="faq-list">
            {filteredFaqs.length ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="faq-question">
                    {faq.question}
                    <span className="arrow">
                      {activeIndex === index ? "▲" : "▼"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {activeIndex === index && <p>{faq.answer}</p>}
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="no-match">No matching question found.</p>
            )}
          </div>
        </div>
      </div>

      <motion.button
        className="faq-float-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowQueryForm(true)}
      >
        Still have a query?
      </motion.button>

      <AnimatePresence>
        {showQueryForm && (
          <div
            className="faq-popup-overlay"
            onClick={() => setShowQueryForm(false)}
          >
            <motion.div
              className="faq-popup-form"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="faq-popup-close"
                onClick={() => setShowQueryForm(false)}
              >
                ✕
              </button>
              <h2>Still have a query?</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Question"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Faqs;
