import NavBar from './NavBar';
import styles from './header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <h2 className={ styles.name }>Nome da empresa aqui</h2>
      <NavBar />
    </header>
  );
}

export default Header;
