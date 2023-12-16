import { Link } from 'react-router-dom';

function ServicesPage() {
  return (
    <>
      <h2>Serviços em andamento</h2>
      <Link to="/services/new-service"><button>Adicionar novo serviço</button></Link>
      <button>Ver serviços finalizados</button>
    </>
  );
}

export default ServicesPage;
