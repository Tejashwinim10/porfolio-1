import '../styles/certifications.css';
import { FaTrophy } from 'react-icons/fa';
const Certifications = () => (
  
  <div className="container">
    <h2 className='heading'>Certifications</h2>
  <div className='certificate-row'>
  <div className='certificate-box'>
  <div className="edu-icon"><FaTrophy /></div>
  <strong>AI Associate</strong><br/>Salesforce<br/>Oct 2024
  </div>
  <div className='certificate-box'>
     <div className="edu-icon"><FaTrophy /></div>
  <strong>Enterprise Design Thinking</strong><br/>IBM<br/>Feb 2024
  </div>  
  <div className='certificate-box'>
     <div className="edu-icon"><FaTrophy/></div>
  <strong>Prompt Engineering</strong><br/>LinkedIn <br/>Sep 2024
  </div>  
    <div className='certificate-box'>
       <div className="edu-icon"><FaTrophy /></div>
  <strong>AI Foundations Associate</strong><br/>Oracle<br/>Sep 2024
  </div>  
    <div className='certificate-box'>
       <div className="edu-icon"><FaTrophy /></div>
  <strong>Certified APPSEC Practitioner V2 CAP</strong><br/>Secops<br/>Sep 2024
  </div>  
    <div className='certificate-box'>
       <div className="edu-icon"><FaTrophy /></div>
  <strong>SnowPro Associate</strong><br/>Snowflake<br/>Oct 2024
  </div>  
  <div className='certificate-box'>
       <div className="edu-icon"><FaTrophy /></div>
  <strong>Generative AI Fundamentals:</strong><br/>Databricks<br/>Oct 2024
  </div>
  </div>
    
  </div>
);

export default Certifications;
