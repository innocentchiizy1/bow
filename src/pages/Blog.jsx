import React from "react";
import "../styles/blog.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Blog Header */}
      <header className="blog-header">
        <h1 className="blog-title">Our Blog</h1>
        <p className="blog-description">
          Stay updated with the latest insights, trends, and updates from our team.
        </p>
      </header>

      {/* Main Blog Section */}
      <div className="blog-container">
        {/* Blog Content Section */}
        <section className="blog-content">
          {/* Featured Posts */}
          <div className="featured-posts">
            <h2>Featured Posts</h2>
            <div className="featured-posts-list">
              <article className="featured-post">
                <img src="https://via.placeholder.com/500x300" alt="Featured Post 1" />
                <h3>Building Successful Brand Strategies</h3>
                <p>
                  Learn how to create effective branding strategies to elevate your business and stand out.
                </p>
              </article>
              <article className="featured-post">
                <img src="https://via.placeholder.com/500x300" alt="Featured Post 2" />
                <h3>Top Marketing Trends to Watch</h3>
                <p>
                  Stay ahead by exploring the marketing trends that will dominate in the coming years.
                </p>
              </article>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="post-list">
            <h2>Latest Posts</h2>
            <article className="post">
              <h3>The Role of Creativity in Advertising</h3>
              <p>Explore how creativity can drive advertising campaigns to success.</p>
            </article>
            <article className="post">
              <h3>Leveraging Social Media for Business Growth</h3>
              <p>
                Discover tips and tricks to maximize your presence on social platforms.
              </p>
            </article>
            <article className="post">
              <h3>Understanding Consumer Behavior</h3>
              <p>
                Insights into how customers make decisions and how to adapt your strategies accordingly.
              </p>
            </article>
            <div className="load-more">
              <button>Load More</button>
            </div>
          </div>
        </section>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul className="categories-list">
            <li><a href="#business-tips">Business Tips</a></li>
            <li><a href="#industry-updates">Industry Updates</a></li>
            <li><a href="#success-stories">Success Stories</a></li>
          </ul>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </aside>
      </div>


    </div>
  );
};

export default Blog;
