import { NavLink } from 'react-router-dom';
import styles from '../header.module.css';

function NavBar() {
  return (
    <nav className={ styles.navbar }>
      <NavLink className={ styles.link } to="/">Início</NavLink>
      <NavLink className={ styles.link } to="/storage">Estoque</NavLink>
      <NavLink className={ styles.link } to="/services">Serviços</NavLink>
    </nav>
  );
}

export default NavBar;
