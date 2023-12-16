import { Link } from 'react-router-dom';
import styles from './home.module.css';
import AddImage from '../../assets/AddImage.png';

function Home() {
  return (
    <div className={ styles.container }>
      <Link className={ styles.buttoncard } to="/storage/new-item">
        <img className={ styles.addimage } src={ AddImage } alt="addImage" />
        <h2 className={ styles.titlebutton }>Adicionar produtos ao estoque</h2>
      </Link>

      <Link className={ styles.buttoncard } to="/services/new-service">
        <img className={ styles.addimage } src={ AddImage } alt="addImage" />
        <h2 className={ styles.titlebutton }>Adicionar Novo serviço</h2>
      </Link>

      <Link className={ styles.buttoncard } to="/storage">
        <img className={ styles.addimage } src={ AddImage } alt="addImage" />
        <h2 className={ styles.titlebutton }>Ver Produtos em estoque</h2>
      </Link>

      <Link className={ styles.buttoncard } to="/services">
        <img className={ styles.addimage } src={ AddImage } alt="addImage" />
        <h2 className={ styles.titlebutton }>Ver Serviços em andamento</h2>
      </Link>
    </div>
  );
}

export default Home;
