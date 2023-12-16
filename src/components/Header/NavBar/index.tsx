import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/storage">Estoque</NavLink>
      <NavLink to="/services">Serviços</NavLink>
    </nav>
  );
}

export default NavBar;
