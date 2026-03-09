import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Button } from './ui/button/button'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="upperSection">
        <div className="contactInfo">
          <div>
            <h4>Solutioneers Info.</h4>
            <h1>Let&apos;s discuss your vision. With us</h1>
          </div>
          <Button href='/#contact'>Schedule a call now →</Button>
          <span>or Email us at</span>
          <Link href="mailto:info@solutioneers.in" className='dotted-mail'>info@solutioneers.in</Link>
        </div>
        <div className="footer-links">
          <div className='quick-links'>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="informations">
            <h3>Information</h3>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="lowerSection">
        <p>Copyright © {new Date().getFullYear()} Solutioneers Infotech Pvt. Ltd. All rights reserved.</p>
        <ul className="socialLinks">
          <li><Link href="https://www.facebook.com/solutioneers" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link></li>
          <li><Link href="https://www.linkedin.com/company/solutioneers" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Link></li>
          <li><Link href="https://www.instagram.com/solutioneers/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link></li>
          <li><Link href="https://www.x.com/solutioneers" target="_blank" rel="noopener noreferrer"><FaXTwitter /></Link></li>
        </ul>
      </div>
    </footer>
  )
}
