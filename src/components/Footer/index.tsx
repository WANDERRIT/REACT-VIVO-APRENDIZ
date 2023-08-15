import logoConexos from "../../assets/logo-infinity.png";
import { Container, FooterStyled } from "./style";
"../../assets/logo-conexos-white.png"
export default function Footer() {
  return (
    <>
      <FooterStyled>
        <Container>
          <img src={logoConexos} alt="Logo Conexos" />

          <p>
            Projeto desenvolvido na academia Aprendiz Vivo Tech - Gama Academy
          </p>
        </Container>
      </FooterStyled>
    </>
  );
}
