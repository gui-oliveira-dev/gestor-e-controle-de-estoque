import { Link } from 'react-router-dom';
import AddServiceForm from '../components/AddServiceForm';

function AddServicePage() {
  return (
    <>
      <h1>Adicionar serviço</h1>
      <AddServiceForm />
      <Link to="/services"><button>Cancelar</button></Link>
    </>
  );
}

export default AddServicePage;
