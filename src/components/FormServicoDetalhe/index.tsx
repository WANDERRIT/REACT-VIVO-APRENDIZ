import { Link } from "react-router-dom";
import Button from "../Button";
import { Container, Form } from "./style";


export default function FormServicoDetalhe() {
  return (<>
    <Container>
      <Form>
        <label>Nome do clinte</label>
        <input
          type="text"
          value="Joana da Silva Barbosa"
          disabled
        />

        <label>CPF</label>
        <input
          type="number"
          value="00000000000"
          disabled
      
        />

        <label>Dados de contato</label>
        <input
          value=""
          type=""
          disabled
        />

        <label>Serviço solicitado</label>
        <input
          value="Plano 1 - Infinity"
          type=""
          disabled
        />

        <label>Status</label>
        <input
          type="text"
          value="Aguardando agendamento"
          disabled
        />

        <label>Funcionário que aceitou o serviço</label>
        <input
          type=""
          value="Hendy Almeida"
          disabled
        />

        <label>horario sugerido</label>
        <input
          type="text"
          value="08:00 - 12:00"
          disabled
        />

        <label>Data da contratação</label>
        <input
          type="text"
          value="26/06/2023"
          disabled
        />
        <Link to="/servicos">
        <Button style="botaoCinza" text="Voltar" />
        </Link>
        <Button style="botaoVerde" text="Atender solicitação" />

      </Form>
    </Container>
  </>)
}
