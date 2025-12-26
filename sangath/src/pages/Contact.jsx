import { useState } from 'react'
import { useEffect } from 'react'
import './Contact.css'

function Contact() {
  useEffect(() => {
    document.title = 'Contact Us – Sangath Global Exim | Get In Touch'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">Get In Touch With Sangath Global Exim</p>
        </div>
      </div>

      <div className="container">
        {/* Contact Info */}
        <section className="contact-info-section">
          <div className="contact-info-grid">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Office Address</h3>
              <p>Ganga Jamuna Apartment</p>
              <p>Kolkata, West Bengal, India</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+913322811396">+91-33-22811396/97</a>
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@umaexports.net.in">info@umaexports.net.in</a>
              </p>
            </div>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="map-form-section">
          <div className="map-form-grid">
            {/* Google Map */}
            <div className="map-container">
              <h2>Find Us</h2>
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.3631!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjEnNDcuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sangath Global Exim Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="business-hours-section">
          <div className="hours-card">
            <h2>Business Hours</h2>
            <div className="hours-list">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 2:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
