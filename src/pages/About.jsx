import React from "react";
import "../styles/about.css";
import { FaRocket, FaPen, FaBullhorn } from "react-icons/fa"; // Service icons from react-icons

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Bowbonish</h1>
          <p>
            Your trusted partner for innovative and impactful advertising
            solutions.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2 className="section-heading">Our Mission</h2>
        <p>
          At Bowbonish, we focus on helping businesses harness the power of
          creative advertising to boost visibility, foster engagement, and
          strengthen brand-customer relationships.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2 className="section-heading">Our Vision</h2>
        <p>
          We strive to lead the advertising industry with unparalleled creativity,
          innovative solutions, and reliable results. Our vision is to shape the
          future of branding and reach new milestones with each project.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-heading">What We Do</h2>
        <div className="services-cards">
          <div className="service-card">
            <FaRocket size={50} color="blue" />
            <h3>Billboard Branding</h3>
            <p>
              Grab attention with large-format billboard ads, reaching thousands
              of potential customers daily.
            </p>
          </div>
          <div className="service-card">
            <FaPen size={50} color="blue" />
            <h3>Graphic Design</h3>
            <p>
              Creative visual designs to communicate your brand's essence and
              message clearly.
            </p>
          </div>
          <div className="service-card">
            <FaBullhorn size={50} color="blue" />
            <h3>Digital Billboards</h3>
            <p>
              Dynamic advertising through digital billboards that offer real-time
              updates and instant impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2 className="section-heading">Why Choose Bowbonish?</h2>
        <p>
          At Bowbonish, we value transparency, innovation, and customer
          satisfaction. Our creative, results-driven approach ensures that we
          deliver solutions tailored to your brand's unique needs.
        </p>
      </section>

      {/* Team/Client Testimonials */}
      <section className="testimonials">
        <h2 className="section-heading">What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Bowbonish has been a key partner in boosting our brand’s presence
              through their creative billboard designs. Their team is efficient,
              professional, and a pleasure to work with!"
            </p>
            <p><strong>- Client Name</strong></p>
          </div>
          <div className="testimonial-card">
            <p>
              "The digital billboards from Bowbonish transformed our marketing
              efforts. We saw a noticeable increase in our audience engagement."
            </p>
            <p><strong>- Client Name</strong></p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2 className="cta-heading">Let’s take your brand to the next level</h2>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default AboutUs;
