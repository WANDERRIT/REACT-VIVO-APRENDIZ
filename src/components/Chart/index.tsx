import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import axios from 'axios'; // Importe o axios para fazer a chamada à API
import { Pizza } from './style';

export default function PieActiveArc() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // Faça uma chamada à API para obter os dados desejados
    axios.get('http://localhost:3000/api/order') // Substitua pela URL correta da sua API
      .then((response) => {
        const apiData = response.data;

        // Mapeie os dados da API para o formato esperado pelo gráfico de pizza
        const pieChartData = apiData.map((item) => ({
          id: item.id,
          value: item.id, // Use o campo desejado como valor do gráfico de pizza
          label: item.name,
          
        }));

        setData(pieChartData);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  return (
    <Pizza>

      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30 },
          },
        ]}
        sx={{
          [`& .${pieArcClasses.faded}`]: {
            fill: 'gray',
          },
        }}
        height={200}
      />
    </Pizza>
  );
}
