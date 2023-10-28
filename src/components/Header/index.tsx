import { Link } from "react-router-dom";
import logoConexos from "../../assets/logo-infinity.png"
import { HeaderStyled, Container, Menu } from "./style";

export default function Header() {

  const logOut = () =>{
    localStorage.clear();
    window.location.reload();
  }
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
              <li>
              <button type="button" onClick={logOut}><i className="bi bi-box-arrow-left "></i></button>
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
}
