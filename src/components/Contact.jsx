import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";




const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1500">
          <a href="https://www.instagram.com/" target='_blank' className="items"><FaSquareInstagram className='icons'  /></a>
          <a href="https://www.linkedin.com/in/ballava-tandi/" target='_blank' className="items"><FaLinkedin className='icons' /></a>
          <a href="https://leetcode.com/u/AR_RAHUL/" target='_blank' className="items"><SiLeetcode className='icons' /></a>
          <a href="https://github.com/AR-Ballava" target='_blank' className="items"><FaGithubSquare className='icons' /></a>
          <a href="mailto:ballavatandi@gmail.com" className="items"><SiGmail className='icons' /></a>
        </div>
      </div>
    </>
  )
}

export default Contact