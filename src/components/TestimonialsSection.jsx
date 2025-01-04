import React, { useState, useEffect } from "react";
import "../styles/TestimonialsSection.css";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Bowbonish provided us with top-notch digital advertising solutions that helped boost our brand presence significantly!",
      name: "John Doe",
      title: "CEO, TechCorp",
    },
    {
      quote: "Their billboard designs were creative and impactful. Our campaign was a huge success thanks to their innovative ideas!",
      name: "Sarah Lee",
      title: "Marketing Director, RetailMax",
    },
    {
      quote: "Professional, efficient, and results-driven. We couldn’t ask for a better partner in advertising!",
      name: "Mike Johnson",
      title: "Founder, EcomX",
    },
    {
      quote: "Bowbonish has been amazing. Their attention to detail and customer care is second to none!",
      name: "Alice Green",
      title: "Marketing Head, TrendyPlus",
    },
    {
      quote: "Working with Bowbonish gave our brand a fresh new perspective, and the results have been phenomenal!",
      name: "David Smith",
      title: "Creative Director, Lumina Brand",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length); // Move 3 items at a time
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length // Move 3 items at a time
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval when the component unmounts
  }, []);

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        <div className="testimonial-nav prev" onClick={prevTestimonial}>
          <i className="fas fa-chevron-left"></i> {/* Font Awesome left arrow */}
        </div>
        <div className="testimonial-cards">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>
              <p className="testimonial-name">
                {testimonial.name} - {testimonial.title}
              </p>
            </div>
          ))}
        </div>
        <div className="testimonial-nav next" onClick={nextTestimonial}>
          <i className="fas fa-chevron-right"></i> {/* Font Awesome right arrow */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
