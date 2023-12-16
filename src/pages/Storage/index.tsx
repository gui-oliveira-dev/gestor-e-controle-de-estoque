import { Link } from 'react-router-dom';

function StoragePage() {
  return (
    <>
      <h1>Produtos</h1>
      <Link to="/storage/new-item">Adicionar novo produto</Link>
    </>
  );
}

export default StoragePage;
