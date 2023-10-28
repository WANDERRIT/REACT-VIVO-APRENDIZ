import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";
import Footer from "../../components/Footer";
import BarChart from "../../components/BarChart";
import PieActiveArc from "../../components/Chart";
import AppChart from "../../components/LineChart";
import { ChartBar, MainRelat } from "./style";


export default function Relatorios() {
  return (
    <>
      <Header />

        <TextoPrincipal
          titulo="Relatórios"
          descricao="Área exclusiva para funcionários."/>
      <MainRelat>
        <PieActiveArc />

        <ChartBar>
          <AppChart />
        </ChartBar>

      </MainRelat>
      <Footer />
    </>
  );
}