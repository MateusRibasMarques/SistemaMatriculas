import { Navigate, Route, Routes } from "react-router-dom";
 
import Login from "./Pages/Login/Login.jsx";
import Cadastro from "./Pages/Cadastro/Cadastro.jsx";
import Aluno from './Pages/Aluno/Aluno.jsx'
import Professor from './Pages/Professor/Professor.jsx'
import Secretaria from './Pages/Secretaria/Secretaria.jsx'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
       <Route path="/aluno" element={<Aluno />} />
       <Route path="/professor" element={<Professor />} />
        <Route path="/secretaria" element={<Secretaria />} />
      
    </Routes>
  );
}
 