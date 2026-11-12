import { Navigate, Route, Routes } from "react-router-dom";
 
import Login from "./Pages/Login/Login.jsx";
import Cadastro from "./Pages/Cadastro/Cadastro.jsx";

 
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
 