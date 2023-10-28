import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Tabela from "../../components/Tabela";
import TextoPrincipal from "../../components/TextoPrincipal";
import Login from "../Login";

export default function Servicos(){
    const storedAccessCode = localStorage.getItem('Código de acesso');
    const storedPassword = localStorage.getItem('Senha');
    return(
storedAccessCode && storedPassword ? 
        <>
        <Header/>
        <TextoPrincipal
        titulo="Painel administrativo"
        descricao="Detalhes da solicitações"
        />
        <Tabela/>
        <Footer/>
        </> :<Login/>
    )
}