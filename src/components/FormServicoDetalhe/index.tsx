import { Link } from "react-router-dom";
import Button from "../Button";
import { Container, Form } from "./style";
import { useLocation } from "react-router-dom";
import TextoPrincipal from "../TextoPrincipal";
interface Order {
  cpf: number;
  name: string;
  email: string;
  phone: string;
  plan: string;
  status: string;
  time: string;
  service: string;
  street: string;
  adress: string;
  id: number;
}

export default function FormServicoDetalhe() {
  const location = useLocation();
  const selectedOrder: Order = location.state.selectedOrder || {};

  return (<>

    <Container>
      <TextoPrincipal
        titulo="ID do PEDIDO"
        descricao="Detalhes da solicitação"
        value={selectedOrder.id || ""}
      />
      <Form >

        <label>Nome do clinte</label>
        <input
          type=""
          value={selectedOrder.name || ""}
          disabled
        />

        <label>CPF</label>
        <input
          type=""
          value={selectedOrder.cpf || ""}
          disabled

        />

        <label>Email</label>
        <input
          value={selectedOrder.email || ""}
          type=""
          disabled
        />

        <label>Telefone</label>
        <input
          value={selectedOrder.phone || ""}
          type=""
          disabled
        />

        <label>Serviço solicitado</label>
        <input
          value={selectedOrder.plan || ""}
          type=""
          disabled
        />

        <label>Status</label>
        <input
          type=""
          value={selectedOrder.status || ""}
          disabled
        />

        <label>Funcionário que aceitou o serviço</label>
        <input
          type=""
          value="Hendy Almeida"
        />

        <label>Logradouro</label>
        <input
          type=""
          value={selectedOrder.street || ""}
          disabled
        />
        <label>Cidade/Estado</label>
        <input
          type=""
          value={selectedOrder.adress || ""}
          disabled
        />

        <label>horario sugerido</label>
        <input
          type=""
          value={selectedOrder.time || ""}
          disabled
        />

        <label>Data da contratação</label>
        <input
          type=""
          value={selectedOrder.service || ""}
          disabled
        />
        <Link to="/servicos">
          <Button style="botaoCinza" text="Voltar" />
        </Link>

        <Link to="/servicos">
          <Button
            style="botaoVerde"
            text="Atender solicitação"
            onClick={() => {
              window.alert("Pedido enviado aos nossos técnicos");
            }}
          />
        </Link>

      </Form>
    </Container>

  </>)
}
