import "../styles/services.css";


import React from "react";

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Innovative advertising solutions tailored for your brand.</p>
      </div>

      {/* Services Section */}
      <div className="services-list">
        <h2>What We Offer</h2>
        <div className="service-items">
          {/* Service 1 */}
          <div className="service-card">
            <i className="fa-solid fa-billboard"></i>
            <h3>Billboard Branding</h3>
            <p>Create stunning, impactful billboards to capture your audience's attention.</p>
          </div>
          {/* Service 2 */}
          <div className="service-card">
            <i className="fa-solid fa-tv"></i>
            <h3>Digital Billboards</h3>
            <p>Dynamic, digital advertising on premium billboard locations.</p>
          </div>
          {/* Service 3 */}
          <div className="service-card">
            <i className="fa-solid fa-pen"></i>
            <h3>Graphic Design Services</h3>
            <p>Professional designs tailored to communicate your brand's essence.</p>
          </div>
          {/* Service 4 */}
          <div className="service-card">
            <i className="fa-solid fa-bus"></i>
            <h3>Bus Advertising</h3>
            <p>High-visibility bus campaigns to reach your target audience on the move.</p>
          </div>
          {/* Service 5 */}
          <div className="service-card">
            <i className="fa-solid fa-video"></i>
            <h3>TV Advertising</h3>
            <p>Engage with your audience through our TV screens in buses and trains.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <h2>Why Choose Bowbonish?</h2>
        <ul>
          <li>Innovative and creative solutions.</li>
          <li>Reliable and timely services.</li>
          <li>Experienced team of professionals.</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div className="services-cta">
        <h3>Ready to Take Your Brand to the Next Level?</h3>
        <p>Contact us today to create a campaign that delivers results.</p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default Services;
