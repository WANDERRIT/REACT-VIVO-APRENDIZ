import { useState } from "react";
import Button from "../Button";
import { Form, Container } from "./style";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

export default function Formulario() {

  function handleError() {
    toast.error('Credenciais inválidas');
  }
  const [accessCode, setCodigo] = useState("");
  const [password, setSenha] = useState("");


  console.log(accessCode);
  console.log(password);

  async function SignIN() {
    try {
      const response = await api.post('/auth', {
        accessCode,
        password
      });
      console.log(response.data);
      // Tratamento de erro verificando o status 200 para o POST
      if (response.status !== 201) {
        console.error('Unable to login, code status:', response.status);
        return;
      }
    } catch (error) {
      console.error("An error occurred when login costumers:", error);
    }
  }

  const storedAccessCode = localStorage.getItem('Código de acesso');
  const storedPassword = localStorage.getItem('Senha');

  const handleButtonClick = (e) => {
    e.preventDefault();

    localStorage.setItem("Código de acesso", accessCode);
    localStorage.setItem("Senha", password);

    if (accessCode !== storedAccessCode && password !== storedPassword) {
      handleError();

    } else {
      SignIN();
      window.location.reload();
    }
  };

  return (

    <>
      <Container>

        <ToastContainer />
        <Form >
          <label>Código de acesso</label>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setCodigo(e.target.value)}

          />



          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button text="entrar" onClick={handleButtonClick} />
          <Link to="/servicos">
          </Link>


        </Form>
      </Container>

    </>
  )
}



