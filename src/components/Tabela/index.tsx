import Button from "../Button";
import { TabelaServico } from "./style";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import api from "../../services/api";

interface TextoTabela {
  codigo?: number;
  nomeCliente?: string;
  servicoSolicitado?: string;
  dataContratacao?: string
  status?: string;
  code?: string;
  endereço?: string;
}
//interface da API
interface Orders {
  id: number;
  name: string;
  code: string;
  service: string;
  plan: string;
  status: string;
  createdAt: string;
  adress: string;
}

export default function Tabela({
  nomeCliente = "Nome do cliente",
  servicoSolicitado = "Serviço solicitado",
  dataContratacao = "Data da contratação",
  status = "Status",
  code = "Id do pedido",
  endereço = "endereço do cliente"

}: TextoTabela) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState<Orders[]>([]);
  const [searchTerm, setSearchTerm] = useState("")


  const filteredOrders = orders.filter((order) => {
    return (
      order.id.toString().includes(searchTerm) ||
      order.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    api.get('/order').then((res) => {
      console.log(res.data);
      setOrders(res.data as Orders[]);
    }).catch((error) => {
      console.error("An error occurred when searching for orders:", error)
    })
  }, []);


  const anuel = localStorage.getItem("código de acesso");
  console.log(anuel)

  return (
    <>

      <TabelaServico>
      <input
        type="text"
        placeholder="Pesquisar por ID ou nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>{code}</th>
              <th>{nomeCliente}</th>
              <th>{servicoSolicitado}</th>
              <th>{dataContratacao}</th>
              <th>{endereço}</th>
              <th>{status}</th>
            </tr>
          </thead>
          {filteredOrders.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.plan}</td>
                <td >{val.service}</td>
                <td >{val.adress}</td>
                <td >{val.status}</td>

                <td>
                  <Link to="/servicosDetalhes" state={{ selectedOrder: val, orderId: val }}>
                    <Button
                      style="botaoAzul" text="Ver detalhes" />
                  </Link>

                </td>

                <td>
                  <Button
                    style="botaoVerde" text="Atender solicitação" onClick={() => setIsModalOpen(true)} />
                  <Modal content={(<div>
                  </div>)} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
                </td>

              </tr>
            )
          })}
        </table>
      </TabelaServico>
    </>
  )
}

