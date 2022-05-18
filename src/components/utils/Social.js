import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

export const Social = ({ size }) => {
  return (
    <div className="social is-flex is-justify-content-center is-align-items-center">
      <a href="#">
        <div className="social-item is-flex is-justify-content-center is-align-items-center">
          <FaFacebookF size={size} className="social-icon" />
        </div>
      </a>
      <a href="#">
        <div className="social-item is-flex is-justify-content-center is-align-items-center">
          <FaTwitter size={size} className="social-icon" />
        </div>
      </a>
      <a href="#">
        <div className="social-item is-flex is-justify-content-center is-align-items-center">
          <FaYoutube size={size} className="social-icon" />
        </div>
      </a>
      <a href="#">
        <div className="social-item is-flex is-justify-content-center is-align-items-center">
          <FaLinkedin size={size} className="social-icon" />
        </div>
      </a>
      <a href="#">
        <div className="social-item is-flex is-justify-content-center is-align-items-center">
          <FaInstagram size={size} className="social-icon" />
        </div>
      </a>
    </div>
  )
}
