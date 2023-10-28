// importar componente
// import Routes from "./Routes";
import ProctRoutes from "./components/ProctRoutes/ProctRoutes";
import { GlobalStyle } from "./geral";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicosDetalhes from "./pages/ServicosDetalhes";
import Servicos from "./pages/Servicos";
import Relatorios from "./pages/Relatorios";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      
      <Routes>

        <Route element={<ProctRoutes/>}>
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicosDetalhes" element={<ServicosDetalhes/>} />
          <Route path="/relatorios" element={<Relatorios/>} />
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
