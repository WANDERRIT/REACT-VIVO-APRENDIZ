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

const pessoas = [
  {numCodigo:1232434566 , nome: "Joana da Silva barbosa",
   servico: "Plano Infinity - Instalação" ,data:"26/06/2023", statusServico:"Aguardando agendamento"},
  {numCodigo:1232434566 , nome: "Joana da Silva barbosa",
   servico: "Plano Infinity - Instalação" ,data:"26/06/2023", statusServico:"Aguardando agendamento" },
  { numCodigo:1232434566 , nome: "Joana da Silva barbosa",
   servico: "Plano Infinity - Instalação" ,data:"26/06/2023", statusServico:"Aguardando agendamento" },
  {numCodigo:1232434566 , nome: "Joana da Silva barbosa",
   servico: "Plano Infinity - Instalação" ,data:"26/06/2023", statusServico:"Aguardando agendamento"},
  {numCodigo:1232434566 , nome: "Joana da Silva barbosa",
   servico: "Plano Infinity - Instalação" ,data:"26/06/2023", statusServico:"Aguardando agendamento"}
]

export default function Tabela({
nomeCliente ="Nome do cliente",
servicoSolicitado = "Serviço solicitado",
dataContratacao = "Data da contratação",
status = "Status",
code = "Código do pedido",
}:TextoTabela) {
    return (
        <>
<TabelaServico>
<table>
  <tr>
  <th>{code}</th>
  <th>{nomeCliente}</th>
  <th>{servicoSolicitado}</th>
  <th>{dataContratacao}</th>
  <th>{status}</th>
</tr>

{pessoas.map((val, key) => {
                    return (
                      <tr key={key}>
<td>{val.numCodigo}</td>
<td>{val.nome}</td>
<td>{val.servico}</td>
<td >{val.data}</td>
<td >{val.statusServico}</td>
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
 )
 })}
</table>
</TabelaServico>
        </>
    )
}