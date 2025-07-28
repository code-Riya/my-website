import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mini-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Mitteco</h2>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <p>📞 +91 70772 71235</p>
          <p>📧 info@mitteco.in</p>
          <a href="https://www.instagram.com/mitteco_?utm_source=qr&igsh=MWJ3dnJuMm5lZjVraw== ">
            @MITTECO_
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mitteco. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
