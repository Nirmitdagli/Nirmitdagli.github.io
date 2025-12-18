import React, {useContext, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${contactInfo.email_address}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Opening your email client...');
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1000);
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          {/* Left Side - Contact Info */}
          <div className="contact-header">
            <h1 className={isDark ? "heading contact-title" : "heading contact-title light"}>
              {contactInfo.title}
            </h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>
            
            <div className="contact-info-cards">
              {contactInfo.number && (
                <a href={"tel:" + contactInfo.number} className="contact-info-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">{contactInfo.number}</span>
                  </div>
                </a>
              )}
              
              <a href={"mailto:" + contactInfo.email_address} className="contact-info-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{contactInfo.email_address}</span>
                </div>
              </a>
              
              <div className="contact-info-card location">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Connecticut, USA</span>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <SocialMedia />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            <h2 className="form-title">Send me a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
              
              {submitMessage && (
                <p className="submit-message">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
