import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FarmingComposting from "./components/FarmingComposting";
import Faqs from "./components/Faqs";
import QuickContact from "./components/QuickContact";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import "./App.css";
import Blog from "./components/Blog"; // ✅ Add this
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <FarmingComposting />
              <ContactSection />
            </>
          }
        />
        <Route path="/Faqs" element={<Faqs />} />
        {/* Services page route */}
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} /> {/* ✅ Blog page */}
        <Route path="/ContactSection" element={<ContactSection />} />
      </Routes>
      <QuickContact />
      <WhatsAppButton />

      <Footer />
    </Router>
  );
}

export default App;
