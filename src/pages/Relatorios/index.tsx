import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";
import Footer from "../../components/Footer";
import SimpleCharts from "../../components/Chart";
import BarChart from "../../components/Chart";


export default function Relatorios() {
    return (
      <>
      
        <Header />
        <main className="flex">
          <TextoPrincipal
            titulo="Relatórios"
            descricao="Área exclusiva para funcionários."/>
  <BarChart  />
        </main>
        <Footer />
      </>
    );
  }