import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./QuickContact.css";

const QuickContact = () => {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false); // ← Toggle state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4y15sbz",
        "template_ky0hmb2",
        form.current,
        "E7khFOG-CCHi3eop8"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
        setIsOpen(false); // Auto-close after sending
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="quick-contact-wrapper">
      <div
        className="quick-contact-button"
        onClick={() => setIsOpen(!isOpen)} // ← Toggle open/close
      >
        Quick Contact
      </div>
      <div className={`quick-contact-panel ${isOpen ? "open" : ""}`}>
        <form ref={form} onSubmit={sendEmail} className="quick-contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="3"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default QuickContact;
