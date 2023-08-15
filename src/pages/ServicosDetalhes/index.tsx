import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";
import FormServicoDetalhe from "../../components/FormServicoDetalhe";
export default function ServicosDetalhes(){
    return(
        <>
        <Header/>
        <TextoPrincipal
          titulo="PEDIDO #1232434566"
          descricao="Detalhes da solicitação"
        />
        <FormServicoDetalhe/>
    
        
        
        

        <Footer/>
        </>
    )
}