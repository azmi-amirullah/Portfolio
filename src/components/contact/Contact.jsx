import React, { useRef, useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import './contact.css'
import Spinner from '../spinner/Spinner'

const Contact = () => {
  const [Alert, setAlert] = useState(null)
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()
    setAlert('Loading')
    emailjs
      .sendForm(
        'service_9obd2yc',
        'template_cjyiahu',
        form.current,
        'IuQn-Uj_y13W14vWR'
      )
      .then(
        result => {
          setAlert('Success')
        },
        error => {
          setAlert('Error')
        }
      )
    e.target.reset()
  }

  const HideAlert = () => {
    setAlert(null)
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>azmiupb@gmail.com</h5>
            <a href="mailto:azmiupb@gmail.com" target="_blank" rel="noreferrer">
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62 81270052123</h5>
            <a
              href="https://wa.me/+6281270052123?text=Hi%20Azmi"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Azmi-amirullah</h5>
            <a
              href="https://www.linkedin.com/in/azmi-amirullah"
              target="_blank"
              rel="noreferrer"
            >
              View my LinkedIn Profile
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          {Alert === 'Loading' ? (
            <Spinner />
          ) : Alert === 'Success' ? (
            <div className="alert alert-success alert-dismissible">
              <div>Send Message Success</div>
              <button className="btn-close" onClick={() => HideAlert()} />
            </div>
          ) : Alert === 'Error' ? (
            <div className="alert alert-danger alert-dismissible">
              <div>Send Message Failed</div>
              <button className="btn-close" onClick={() => HideAlert()} />
            </div>
          ) : (
            ''
          )}

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
