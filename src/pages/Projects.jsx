import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import "../styles/project.css";

function ProjectBox({ title, shortText, fullText }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="project-box">
      <div className="edu-icon"><FaLightbulb /></div>
      <strong>{title}</strong> <br />
      <p>
        {showMore ? fullText : shortText}
      </p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="btn btn-primary btn-sm fancy-btn"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="container">
      <h2 className="heading">Projects</h2>
      <div className="project-row">

        <ProjectBox
          title="Efficient Power Saving System"
          shortText="IoT-based smart lighting system with motion sensors for automated energy control."
          fullText="Designed and deployed an IoT-based smart lighting solution with motion sensors for automated energy control. Improved efficiency by integrating real-time data processing, embedded programming, automation algorithms, and IoT connectivity protocols."
        />

        <ProjectBox
          title="Weather Dashboard"
          shortText="Responsive React.js dashboard fetching real-time data from OpenWeather API."
          fullText="Built a responsive React.js dashboard powered by the OpenWeather API to deliver real-time weather insights. Implemented autocomplete search, dynamic rendering, asynchronous API calls, and robust error handling for a smooth, cross-platform user experience."
        />

        <ProjectBox
          title="Student Result Management"
          shortText="Full-stack system with CRUD operations and secure API integration."
          fullText="Developed a full-stack Student Result Management System using React.js, Node.js, and Express.js. Enabled efficient CRUD operations for student records, implemented RESTful APIs, asynchronous data handling, and role-based access control for secure and seamless frontend-backend integration."
        />

      </div>
    </div>
  );
}
