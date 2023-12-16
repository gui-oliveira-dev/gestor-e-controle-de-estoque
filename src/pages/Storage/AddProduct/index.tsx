import { Link } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';

function AddProductPage() {
  return (
    <>
      <AddProductForm />
      <Link to="/"><button>Cancelar</button></Link>
    </>
  );
}

export default AddProductPage;
