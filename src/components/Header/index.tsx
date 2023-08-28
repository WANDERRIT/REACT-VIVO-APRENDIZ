import { Link } from "react-router-dom";
import logoConexos from "../../assets/logo-infinity.png"
import { HeaderStyled, Container, Menu } from "./style";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <img src={logoConexos} alt="Logo Infinity" />

          <Menu>
            <ul>
              <li>
               <Link to="/">Início</Link>
              </li>
              <li>
              <Link to="/servicos">Serviços</Link>
              </li>
              <li>
              <Link to="/relatorios">Relatórios</Link>
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
}
