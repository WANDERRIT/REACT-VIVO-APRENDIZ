import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Tabela from "../../components/Tabela";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Servicos(){
    return(
        <>
        <Header/>
        <TextoPrincipal
        titulo="Painel administrativo"
        descricao="Detalhes da solicitações"
        />
        <Tabela/>

        <Footer/>
        </>
    )
}