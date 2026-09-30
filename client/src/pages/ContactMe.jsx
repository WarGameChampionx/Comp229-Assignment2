import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactMe() {
  const navigate = useNavigate()

  // Stores the current values entered into the contact form.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  })

  // Stores validation errors displayed to the user.
  const [error, setError] = useState('')

  // Updates the corresponding form field when the user enters information.
  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Validates the contact form before returning the user to the home page.
  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const phonePattern = /^[0-9+\-()\s]{7,20}$/
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (
      !formData.firstName    .trim() ||
      !formData.lastName     .trim() ||
      !formData.contactNumber.trim() ||
      !formData.email        .trim() ||
      !formData.message      .trim()
    ) {
      setError('Please complete all fields.')
      return
    }

    if (!phonePattern.test(formData.contactNumber)) {
      setError('Please enter a valid contact number.')
      return
    }

    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (formData.message.trim().length < 10) {
      setError('Please enter a message of at least 10 characters.')
      return
    }

    navigate('/')
  }

  return (
    <main className="contact-page">
      <h2>Contact Me</h2>

      <p>
        Have a question or want to get in touch? Fill out the form below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              maxLength="50"
              autoComplete="given-name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              maxLength="50"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            maxLength="20"
            autoComplete="tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength="100"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
            maxLength="1000"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="contact-submit">
          Send Message
        </button>
      </form>
    </main>
  )
}