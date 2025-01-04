import React, { useState, useEffect } from "react";
import "../styles/home.css";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

// import ContactForm from "../components/ContactForm";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Use Loader component
      ) : (
        <div>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h1> Innovative Advertising Solutions for Your Brand.</h1>
              <p>Your Partner in Eye-Catching Advertising</p>
              <Link to="/contact">
                <button className="cta-btn">Request a Quote</button>
              </Link>
            </div>
          </section>

          {/* About Section */}
          <section className="about-us-section">
            <div className="about-us-content">
              <h2>About Bowbonish Ltd</h2>
              <p>
                At Bowbonish Ltd, we specialize in cutting-edge branding and
                advertising solutions. Our mission is to empower businesses with
                impactful visuals that capture attention and drive engagement.
                With a passion for creativity and innovation, we deliver
                outstanding results for our clients.
              </p>
              <p>
                Our vision is to be a trusted leader in the advertising
                industry, known for reliability and exceptional service. Let us
                help you make a bold statement with your brand.
              </p>
              <a href="/about" className="about-us-btn">
                Learn More
              </a>
            </div>
            <div className="about-us-image">
              <img
                src="https://via.placeholder.com/600x400.png?text=Billboard+Image"
                alt="About Bowbonish"
              />
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p className="testimonial-quote">
            "Bowbonish provided us with top-notch digital advertising solutions that
            helped boost our brand presence significantly!"
          </p>
          <p className="testimonial-name">John Doe - CEO, TechCorp</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-quote">
            "Their billboard designs were creative and impactful. Our campaign was a 
            huge success thanks to their innovative ideas!"
          </p>
          <p className="testimonial-name">Sarah Lee - Marketing Director, RetailMax</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-quote">
            "Professional, efficient, and results-driven. We couldn’t ask for a better 
            partner in advertising!"
          </p>
          <p className="testimonial-name">Mike Johnson - Founder, EcomX</p>
        </div>
      </div>
    </section> */}
          <TestimonialsSection />

          {/* FAQs Section */}
          <FAQSection />

          {/* Contact Form Section */}
          <section className="contact-form-section">
            {/* <ContactForm /> */}
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
