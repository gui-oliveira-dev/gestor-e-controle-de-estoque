import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';
import StoragePage from './pages/Storage';
import ServicesPage from './pages/Services';
import Layout from './components/Layout';
import AddProductPage from './pages/Storage/AddProduct';
import AddServicePage from './pages/Services/AddService';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/services" element={ <ServicesPage /> } />
        <Route path="/storage" element={ <StoragePage /> } />
        <Route path="/storage/new-item" element={ <AddProductPage /> } />
        <Route path="/services/new-service" element={ <AddServicePage /> } />
      </Route>
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
