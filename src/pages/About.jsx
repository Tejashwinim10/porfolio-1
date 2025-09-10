import '../styles/about.css';
import image from '../assets/image.jpg';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => (
  <div className="about-page">
    <img src={image} alt="Tejashwini" className="about-img" />
    <h2>"Humble roots, boundless dreams, unstoppable drive."</h2>
    <p>
      Hi, I'm Tejashwini, a passionate B.E (ECE) student from SNS College of Engineering.
      I always believed that where you start doesn’t define how far you can go. With determination, curiosity, and a love for technology, I’m on a journey to become a skilled full-stack developer. I enjoy solving real-world problems by building clean, efficient, and user-friendly applications. Every challenge is an opportunity to learn and grow, and I’m committed to pushing my limits to create impactful solutions.
      I thrive in collaborative environments where ideas flow freely and innovation happens. Whether it’s coding, debugging, or designing, I’m excited to contribute my skills and keep evolving in the fast-paced world of technology.
    </p>

    <div className="contact-section">
      <h3>Contact Me</h3>
      <ul className="contact-list">
        <li><FaEnvelope /> <a href="mailto:tejashwiniat123@gmail.com">tejashwiniat123@gmail.com</a></li>
        <li><FaPhone /> <a href="tel:+91 9360737432">+91 9360737432</a></li>
        <li><FaLinkedin /> <a href="https://linkedin.com/in/tejashwini/sns" target="_blank" rel="noreferrer">linkedin.com/in/tejashwini</a></li>
        <li><FaGithub /> <a href="https://github.com/Tejashwinim10" target="_blank" rel="noreferrer">github.com/Tejashwinim10</a></li>
      </ul>
    </div>
  </div>
);

export default About;
