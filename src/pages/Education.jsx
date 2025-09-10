import '../styles/education.css';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  return (
    <div className="container">
      <h2 className="heading">Education</h2>
      <div className="education-row">
        <div className="education-box">
          <div className="edu-icon"><FaUniversity /></div>
          <strong>B.E (ECE)</strong><br />
          SNS College of Engineering, Coimbatore<br />
          CGPA: 8.89 (2022–2026)
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '88.9%' }}></div>
          </div>
        </div>

        <div className="education-box">
          <div className="edu-icon"><FaGraduationCap /></div>
          <strong>Higher Secondary</strong><br />
          Sri Vijay Vidyalaya,<br /> Hosur<br />
          83% (2022)
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '83%' }}></div>
          </div>
        </div>

        <div className="education-box">
          <div className="edu-icon"><FaSchool /></div>
          <strong>Secondary</strong><br />
          Sri Sharada Vidya Mandir, <br />Hosur<br />
          97% (2020)
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '97%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
