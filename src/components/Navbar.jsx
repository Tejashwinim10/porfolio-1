import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Portfolio</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/certifications">Certifications</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/social">Social</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
