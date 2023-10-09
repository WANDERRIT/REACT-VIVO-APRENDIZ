import { useState } from 'react';
import { ReactNode } from 'react';
import { Container, Overlayer, Header, Main, Footer, } from './style.ts';
import Button from '../Button/index.tsx';
import api from '../../services/api.ts';


interface ModalProps {
  content?: ReactNode;
  title?: ReactNode;
  isOpen: boolean;
  closeModal(): void;
  initialStatus?: string; // Adiciona initialStatus à interface
}

export default function Modal({ content, title, isOpen, closeModal, initialStatus }: ModalProps) {
  const [selectedStatus, setSelectedStatus] = useState(initialStatus || 'Cancelado');


  async function Update() {
    try {
      const response = await api.put("/order/15", { status: selectedStatus });
      console.log(response.data);
      alert(`Status updated to ${selectedStatus}`);
    } catch (error) {
      console.error('Error while updating status:', error);
    } finally {
      closeModal();
    }
    return
  }

  const handleUpdate = () => {
    void Update()
  }

  if (!isOpen) return <div />

  return (<Overlayer>
    <form onSubmit={handleUpdate}>
      <Container>
        <Header>{title}</Header>
        <Main>{content}

          <label>Atualize o status do pedido</label>
          <select
            title="Atendimento"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}>
            <option >Cancelado</option>
            <option >Em andamento</option>
            <option >Finalizado</option>
            <option >Em atraso</option>
          </select>

        </Main>
        <Footer>
          <Button
            style="atualizarStatus"
            text="Atualizar status"
          // onClick={() => {
          //   closeModal();

          //   alert(`Status atualizado para: ${selectedStatus}`);
          // }}
          />

        </Footer>

      </Container>
    </form>
  </Overlayer>

  );
}
