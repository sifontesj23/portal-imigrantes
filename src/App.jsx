import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.jsx';
import Menu from './components/Menu'; // ✅ importou o novo menu


import CadastrarCurriculo from "./pages/CadastrarCurriculo.jsx";
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';
import Register from './pages/Register.jsx';
import Perfil from './pages/Perfil.jsx';

export default function App() {
  useTranslation(); // só para manter vivo se não usar no App

  return (
    <Router>
      <Menu /> {/* ✅ usa o novo menu */}

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            }
          />
          <Route path="/curriculo" element={
            <PrivateRoute>
              <CadastrarCurriculo />
            </PrivateRoute>
          } />

        </Routes>
      </main>
    </Router>
  );
}
