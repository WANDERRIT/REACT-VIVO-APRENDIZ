import Button from "../Button";
import FormField from "../FormField";
import { Container, Form } from "./style";


export default function FormServicoDetalhe() {
  return (<>
    <Container>
      



      <Form>
   

        <label>Nome do clinte</label>
        <input
          type="text"
          value="Joana da Silva"
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
          value=""
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








        <Button style="botaoCinza" text="Voltar" />
        <Button style="botaoVerde" text="Atender solicitação" />



      </Form>

    </Container>

  </>)
}
