import { Container, Div } from "./style";

interface TextoPrincipalProps {
  titulo?: string;
  descricao?: string;
  value?: string;
}

export default function TextoPrincipal({
  titulo = "Titulo Padrão",
  descricao = "",
  value=""
}: TextoPrincipalProps) {
  return (
    <>
      <Container>
        <h1>{titulo}</h1>
        <h2>{value}</h2>
      </Container>
      <Div>
        <p>{descricao}</p>
      </Div>
    </>
  );
}
