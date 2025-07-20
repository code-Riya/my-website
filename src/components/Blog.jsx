import React, { useState } from "react";
import "./Blog.css";
import blogHero from "../assets/blog7.jpg";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

const posts = [
  {
    id: 1,
    title: "How to Start Terrace Farming at Home",
    excerpt:
      "Discover the basics of setting up your own terrace farm using organic methods.",
    image: blog1,
    url: "#",
  },
  {
    id: 2,
    title: "Benefits of Composting for Urban Homes",
    excerpt:
      "Composting reduces waste and creates healthy soil. Here's how you can start today.",
    image: blog2,
    url: "#",
  },
  {
    id: 3,
    title: "5 Common Mistakes in Home Gardening",
    excerpt:
      "Avoid these common errors when starting your green journey on rooftops.",
    image: blog3,
    url: "#",
  },
  {
    id: 4,
    title: "Terrace Garden Design Ideas",
    excerpt: "Get inspired by creative and practical terrace garden layouts.",
    image: blog4,
    url: "#",
  },
  {
    id: 5,
    title: "Vermicomposting Explained",
    excerpt:
      "Learn how worms can help you create nutrient-rich compost at home.",
    image: blog5,
    url: "#",
  },
  {
    id: 6,
    title: "Best Plants for Indian Rooftops",
    excerpt:
      "Discover hardy plants that thrive in the Indian terrace environment.",
    image: blog6,
    url: "#",
  },
];

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* ✅ HERO SECTION */}
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${blogHero})` }}
      >
        <div className="blog-hero-overlay">
          {/* ✅ Typing Text */}
          <h1 className="typing-heading">Grow Greener with Mitteco</h1>

          <p className="blog-hero-subheading">
            Terrace Farming • Composting • Sustainability
          </p>

          {/* ✅ Marquee Scrolling Text */}
          <div className="marquee">
            <span>
              🌱 Grow your own food • ♻️ Reduce waste • 🌿 Green your terrace •
              🪱 Try composting today • 🌼 Sustainable Living • 🌞 Go Organic •
              🌻 Make Earth Better • 💧 Save Water .
            </span>
            <span>
              🌱 Grow your own food • ♻️ Reduce waste • 🌿 Green your terrace •
              🪱 Try composting today • 🌼 Sustainable Living • 🌞 Go Organic •
              🌻 Make Earth Better • 💧 Save Water .
            </span>
          </div>

          <div className="blog-hero-buttons">
            <a href="#latest-posts" className="btn primary">
              Explore Blog
            </a>
            <a href="/ContactSection" className="btn secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* ✅ BLOG CARDS SECTION */}
      <section className="blog-section" id="latest-posts">
        <div className="container">
          <h2 className="section-heading">Latest from the Mitteco Blog</h2>
          <p className="section-subtitle">
            Inspiring tips, stories, and ideas on terrace farming and
            composting.
          </p>

          <div className="interactive-blog-row">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={`blog-card-row ${
                  activeIndex === index
                    ? "active"
                    : activeIndex !== null
                    ? "inactive"
                    : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={post.image} alt={post.title} className="blog-thumb" />
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href={post.url} className="blog-btn">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
