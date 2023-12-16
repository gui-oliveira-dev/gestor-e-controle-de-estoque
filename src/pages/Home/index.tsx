import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/storage/new-item"><button>Adicionar produtos ao estoque</button></Link>
      <Link to="/services/new-service"><button>Adicionar Novo serviço</button></Link>
      <Link to="/storage"><button>Ver Produtos em estoque</button></Link>
      <Link to="/services"><button>Ver Serviços em andamento</button></Link>
    </>
  );
}

export default Home;
