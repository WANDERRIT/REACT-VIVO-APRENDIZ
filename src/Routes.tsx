import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import ServicosDetalhes from "./pages/ServicosDetalhes";
import Servicos from "./pages/Servicos";
import Relatorios from "./pages/Relatorios";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    
    {
      path: "/servicosDetalhes",
      element: <ServicosDetalhes/>,
    },

    {
      path: "/servicos",
      element: <Servicos/>,
    },

    {
      path: "/relatorios",
      element: <Relatorios/>,
    },

  ]);

  return <RouterProvider router={routes} />;
}
