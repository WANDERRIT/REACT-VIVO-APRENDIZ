import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const storedAccessCode = localStorage.getItem('Código de acesso');
  const storedPassword = localStorage.getItem('Senha');
  // let auth = {"token": false}


  return storedAccessCode && storedPassword == "adm90"? <Outlet /> : <Navigate to="/" />;
}