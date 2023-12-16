import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1>Oops! Página Não encontrada</h1>
      <Link to="/">Voltar para o início</Link>
    </>
  );
}

export default NotFoundPage;
