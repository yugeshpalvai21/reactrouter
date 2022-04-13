import { NavLink, NavNavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h3>Porffolio APP</h3>
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      <NavLink to="/About" activeClassName="active">About</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </div>
  )
}

export default Header;
