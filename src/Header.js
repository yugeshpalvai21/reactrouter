import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h3>Porffolio APP</h3>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header;
