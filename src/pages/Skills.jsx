import '../styles/skills.css';
import { FaRobot,FaCode,FaLanguage,FaUserTie} from 'react-icons/fa';
export default function Skills() {
  return (
    <div className="container">
      <h2 className="heading">Skills</h2>
      <div className="skills-row">
     <div className="skills-box">
      <div className="edu-icon"><FaCode/></div>
          <h5>Programming & Web Development</h5>
          <ul>
            <li>Python</li>
            <li>Java (Basics)</li>
            <li>HTML, CSS, JavaScript (Basics)</li>
            <li>React.js</li>
            <li>Node.js,Express</li>
          </ul>
      </div>
      <div className="skills-box">
        <div className="edu-icon"><FaRobot/></div>
        <h5>Tools</h5>
          <ul>
            <li>VS Code</li>
            <li>Canva</li>
            <li>Postman</li>
            <li>Insomnia</li>
            <li>Git</li>
          </ul>
      </div>
      <div className="skills-box">
        <div className="edu-icon"><FaUserTie /></div>
        <h5>Soft Skills</h5>
          <ul>
            <li>Team Work</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
      </div>
      <div className="skills-box">
        <div className="edu-icon"><FaLanguage/></div>
            <h5>Languages</h5>
          <ul>
            <li>English</li>
            <li>Kannada</li>
            <li>Telugu</li>
            <li>Tamil</li>
          </ul>
          </div>
      </div>
    </div>
  );
}
