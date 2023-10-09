import * as React from "react";
import { BarChart } from '@mui/x-charts/BarChart';

export default function SimpleCharts() {

  return (
    <BarChart
    xAxis={[
      {
        id: 'barCategories',
        data: ['em atraso', 'cancelado', 'em andamento', 'finalizado'],
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: [1, 0, 1,0],
      },
    ]}
    width={700}
    height={400}
  />
  );
}
