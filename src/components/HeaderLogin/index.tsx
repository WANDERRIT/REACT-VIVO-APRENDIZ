import { HeaderLogin, Container, Menu } from "./style";
import logoConexos from "../../assets/logo-infinity.png"


export default function Header() {
  return (
    <>
      <HeaderLogin>
        <Container>
          <img src={logoConexos} alt="Logo Infinity" />
          <Menu>
          </Menu>
        </Container>
      </HeaderLogin>
    </>
  );
}
