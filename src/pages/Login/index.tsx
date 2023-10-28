import Footer from "../../components/Footer";
import Formulario from "../../components/Formulario";
import  HeaderLogin  from "../../components/HeaderLogin";
import TextoPrincipal from "../../components/TextoPrincipal";
import Servicos from "../Servicos";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {

  const storedAccessCode = localStorage.getItem('Código de acesso');
  const storedPassword = localStorage.getItem('Senha');
  return (
    storedAccessCode && storedPassword =="adm90"? <Servicos/> :
    
    <>
     <HeaderLogin/>
      <main className="flex">
        <TextoPrincipal
          titulo="Painel de Controle"
          descricao="Área exclusiva para funcionários."
        />
        <Formulario/>
      </main>
      <Footer />
    </>
  );
}
