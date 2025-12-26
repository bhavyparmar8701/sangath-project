import { useState } from 'react'
import { useEffect } from 'react'
import './Careers.css'

function Careers() {
  useEffect(() => {
    document.title = 'Careers – Sangath Global Exim | Join Our Team'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  })

  const jobOpenings = [
    {
      title: 'Export Manager',
      department: 'Operations',
      location: 'Kolkata, India',
      type: 'Full-time',
      description: 'Manage export operations, coordinate with international clients, and ensure compliance with trade regulations.'
    },
    {
      title: 'Quality Control Specialist',
      department: 'Quality Assurance',
      location: 'Kolkata, India',
      type: 'Full-time',
      description: 'Oversee quality testing, maintain quality standards, and ensure product compliance.'
    },
    {
      title: 'Business Development Executive',
      department: 'Sales & Marketing',
      location: 'Kolkata, India',
      type: 'Full-time',
      description: 'Develop new business opportunities, build client relationships, and expand market reach.'
    },
    {
      title: 'Logistics Coordinator',
      department: 'Operations',
      location: 'Kolkata, India',
      type: 'Full-time',
      description: 'Coordinate shipping, manage documentation, and ensure timely delivery of shipments.'
    }
  ]

  const benefits = [
    'Competitive salary packages',
    'Health insurance coverage',
    'Professional development opportunities',
    'Work-life balance',
    'International exposure',
    'Growth-oriented work environment'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your application! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: null
    })
  }

  return (
    <div className="careers-page">
      <div className="page-header">
        <div className="container">
          <h1>Careers</h1>
          <p className="page-subtitle">Join Our Team and Grow With Us</p>
        </div>
      </div>

      <div className="container">
        {/* Job Openings */}
        <section className="job-openings-section">
          <div className="section-header-custom">
            <h2>Current Job Openings</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Explore exciting career opportunities with Sangath Global Exim
            </p>
          </div>

          <div className="jobs-grid">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-meta">
                  <span className="job-department">{job.department}</span>
                  <span className="job-location">📍 {job.location}</span>
                </div>
                <p className="job-description">{job.description}</p>
                <button className="btn-apply">Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Internship Programs */}
        <section className="internship-section">
          <div className="section-header-custom">
            <h2>Internship Programs</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Gain valuable industry experience through our internship programs
            </p>
          </div>

          <div className="internship-info">
            <div className="internship-card">
              <h3>International Trade Internship</h3>
              <p>
                Learn about export-import operations, documentation, and international trade 
                practices. Perfect for students pursuing international business or commerce.
              </p>
              <ul>
                <li>Duration: 3-6 months</li>
                <li>Stipend: Provided</li>
                <li>Certificate: Upon completion</li>
              </ul>
            </div>
            <div className="internship-card">
              <h3>Quality Assurance Internship</h3>
              <p>
                Gain hands-on experience in quality control, testing procedures, and compliance 
                management. Ideal for students in food science or quality management.
              </p>
              <ul>
                <li>Duration: 3-6 months</li>
                <li>Stipend: Provided</li>
                <li>Certificate: Upon completion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits-section">
          <div className="section-header-custom">
            <h2>Why Work With Us</h2>
            <div className="section-divider"></div>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="application-form-section">
          <div className="section-header-custom">
            <h2>Apply Now</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Submit your application and resume to join our team
            </p>
          </div>

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
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
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position Applied For *</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="resume">Upload Resume (PDF, DOC, DOCX) *</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Cover Letter / Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us why you're interested in joining our team..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Submit Application</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Careers

