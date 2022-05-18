import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import useData from '../../hooks/useData'

export const Social = ({ size }) => {
  const { empresa } = useData()

  return (
    <div className="social is-flex">
      {empresa.facebook && (
        <a href="#">
          <div className="social-item is-flex is-justify-content-center is-align-items-center">
            <FaFacebookF size={size} className="social-icon" />
          </div>
        </a>
      )}
      {empresa.twitter && (
        <a href={empresa.twitter} target="_blank" rel="noreferrer">
          <div className="social-item is-flex is-justify-content-center is-align-items-center">
            <FaTwitter size={size} className="social-icon" />
          </div>
        </a>
      )}
      {empresa.youtube && (
        <a href={empresa.youtube} target="_blank" rel="noreferrer">
          <div className="social-item is-flex is-justify-content-center is-align-items-center">
            <FaYoutube size={size} className="social-icon" />
          </div>
        </a>
      )}
      {empresa.linkedin && (
        <a href={empresa.linkedin} target="_blank" rel="noreferrer">
          <div className="social-item is-flex is-justify-content-center is-align-items-center">
            <FaLinkedin size={size} className="social-icon" />
          </div>
        </a>
      )}
      {empresa.instagram && (
        <a href={empresa.instagram} target="_blank" rel="noreferrer">
          <div className="social-item is-flex is-justify-content-center is-align-items-center">
            <FaInstagram size={size} className="social-icon" />
          </div>
        </a>
      )}
      {empresa.telegram && (
        <a href={empresa.telegram} target="_blank" rel="noreferrer">
          <div className="social-item is-flex is-justify-content-center is-align-items-center">
            <FaTelegram size={size} className="social-icon" />
          </div>
        </a>
      )}
    </div>
  )
}
