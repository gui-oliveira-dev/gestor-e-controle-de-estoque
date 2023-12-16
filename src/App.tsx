import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';
import StoragePage from './pages/Storage';
import ServicesPage from './pages/Services';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/services" element={ <ServicesPage /> } />
        <Route path="/storage" element={ <StoragePage /> } />
      </Route>
      <Route path="/*" element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
