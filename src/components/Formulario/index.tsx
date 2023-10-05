import { useState, useEffect } from "react";
import Button from "../Button";
import { Form, Container } from "./style";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Formulario() {

  const [accessCode, setCodigo] = useState("");
  const [password, setSenha] = useState("");


  console.log(accessCode);
  console.log(password);

  async function SignIN() {
    try {
      const response = await api.post('/employee', {
        accessCode,
        password
      });
      console.log(response);
      // Tratamento de erro verificando o status 200 para o POST
      if (response.status !== 200) {
        console.error('Unable to login, code status:', response.status);
        return;
      }
      localStorage.setItem('código de acesso',accessCode);
      localStorage.setItem('senha', password);
    } catch (error) {
      console.error("An error occurred when login costumers:", error);
    }
  }
const storedAccessCode = localStorage.getItem('código de acesso');
 const storedPassword = localStorage.getItem('senha');

 console.log(storedAccessCode);
 console.log(storedPassword);


  const handleButtonClick = () => {
 if(accessCode === storedAccessCode && password === storedPassword){
   void SignIN();
 } else{ 
  console.error('Credenciais inválidas');
  
  alert('Credenciais inválidas. Tente novamente.');}
  };


  
  return (
    <>
      <Container>
        <Form>
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

          <Link to="/servicos">
            <Button text="entrar" onClick={handleButtonClick} />
          </Link>


        </Form>
      </Container>
    </>
  );
}



