import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  
  return (
    <section className="contact" id="connect">
      {<div>
        <div id="info">
						<h3>Get In Touch</h3>
						<span>Whether you have a question or want to collaborate on a project, I'd love to hear from you! I'm always open to new opportunities and exciting projects. Feel free to reach out via email or connect with me on LinkedIn. Let's create something amazing together!</span><br/><br/>
						<p><i class="fa-sharp fa-solid fa-location-dot"></i> Noida, India</p>
						<p><i class="fa-regular fa-envelope"></i> idhiman1505@gmail.com</p>
					</div>
          <div className="social-icon social-icon-contact">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
        </div>}
    </section>
  )
}
