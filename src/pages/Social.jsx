import '../styles/social.css';
import { FaHandsHelping,FaFemale} from 'react-icons/fa';
export default function Social() {
  return (
    <div className="container ">
      <h2 className="heading">Social Responsibilities</h2>
     <div className="social-row">
      <div className="social-box">
        <div className="edu-icon"><FaFemale/></div>
          <strong>Women Empowerment Cell:</strong>
          <ul>
            <li>Organized cancer awareness program</li>
            <li>Hosted Women’s Day program to promote equality</li>
          </ul>
      </div>
      <div className="social-box">
        <div className="edu-icon"><FaHandsHelping/></div>
       <strong>NSS:</strong>
          <ul>
            <li>Tree planting at Kurumbapalayam – Environmental Awareness</li>
          </ul>
      </div>

     </div>
    </div>
  );
}
