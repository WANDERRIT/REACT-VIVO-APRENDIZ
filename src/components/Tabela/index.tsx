import { Link } from "react-router-dom";
import Button from "../Button";
import { TabelaServico } from "./style";
interface TextoTabela {
    codigo?:number;
    nomeCliente?: string;
    servicoSolicitado?: string;
    dataContratacao?:string
    status?:string;
    code?:string;
  }

export default function Tabela({
codigo = 123,
nomeCliente ="xx",
servicoSolicitado = "xx",
dataContratacao = "xx",
status = "xx",
code = "xx"

}:TextoTabela) {
    return (
        <>
<TabelaServico>
<table>

  <tr>
  <th>{code ="Código do pedido"}</th>
  <th>{nomeCliente ="Nome do cliente"}</th>
  <th>{servicoSolicitado = "Serviço solicitado"}</th>
  <th>{dataContratacao = "Data da contratação"}</th>
  <th>{status = "Status"}</th>
</tr>

<tr>
<td>{codigo =1232434566}</td>
<td>{nomeCliente="Joana da Silva barbosa"}</td>
<td>{servicoSolicitado="Plano Infinity - Instalação"}</td>
<td>{dataContratacao="26/06/2023"}</td>
<td>{status ="Aguardando agendamento"}</td>
 <td>
<Link to="/servicosDetalhes">
  <Button
  style="botaoAzul" text="Ver detalhes"/>
</Link> 
  </td>

 <td> 

  <Button
  style="botaoVerde"
  text="Atender solicitação"/>
  
  </td>
</tr>

<tr>
<td>{codigo =1232434566}</td>
<td>{nomeCliente="Joana da Silva"}</td>
<td>{servicoSolicitado="Plano Infinity - Instalação"}</td>
<td>{dataContratacao="26/06/2023"}</td>
<td>{status ="Aguardando agendamento"}</td>

<td>
<Link to="/servicosDetalhes">
  <Button
  style="botaoAzul" text="Ver detalhes"/>
</Link> 
  </td>

  <td><Button
  style="botaoVerde"
  text="Atender solicitação"/>
  </td>
</tr>

<tr>
<td>{codigo =1232434566}</td>
<td>{nomeCliente="Joana da Silva"}</td>
<td>{servicoSolicitado="Plano Infinity - Instalação"}</td>
<td>{dataContratacao="26/06/2023"}</td>
<td>{status ="Aguardando agendamento"}</td>

<td>
<Link to="/servicosDetalhes">
  <Button
  style="botaoAzul" text="Ver detalhes"/>
</Link> 
</td>

  <td><Button
  style="botaoVerde"
  text="Atender solicitação"/>
  </td>
</tr>

<tr>
<td>{codigo =1232434566}</td>
<td>{nomeCliente="Joana da Silva"}</td>
<td>{servicoSolicitado="Plano Infinity - Instalação"}</td>
<td>{dataContratacao="26/06/2023"}</td>
<td>{status ="Aguardando agendamento"}</td>

<td>
<Link to="/servicosDetalhes">
  <Button
  style="botaoAzul" text="Ver detalhes"/>
</Link> 
  </td>

  <td><Button
  style="botaoVerde"
  text="Atender solicitação"/>
  </td>
</tr>

</table>
</TabelaServico>

        </>


    )

}