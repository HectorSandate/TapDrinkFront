import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

interface LiquidFillChartProps {
  percentage: number;
}

interface FormatterParam {
  value: number;
}

function LiquidFillChart({ percentage }: LiquidFillChartProps) {
  const chartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('liquidfill-chart') as HTMLDivElement);
    chartRef.current = chart;

    const option = {
      series: [
        {
          type: 'liquidFill',
          data: [0],  // Iniciar con 0
          radius: '80%',
          color: ['#f39e28'],  // Color de la primera barra, muestra porcentaje
          outline: { show: false },
          backgroundStyle: { color: '#eee' },
          label: {
            fontSize: 24,
            fontWeight: 'bold',
            formatter: (param: FormatterParam) => `${(param.value * 100).toFixed(2)}%`
          },
          waveAnimation: true,
          direction: 'right' // Dirección de crecimiento de la primera barra
        },
        {
          type: 'liquidFill',
          data: [0],  // Iniciar con 0
          radius: '80%',
          color: ['#ffb622'],  // Color de la segunda barra, sin mostrar porcentaje
          outline: { show: false },
          backgroundStyle: { color: '#eee' },
          label: {
            show: false  // No mostrar la etiqueta en esta serie
          },
          waveAnimation: true,
          phase: Math.PI,  // Desplazamiento inicial de la onda para la segunda barra
          direction: 'left' // Dirección de crecimiento de la segunda barra
        }
      ],
    };

    chart.setOption(option);

    return () => {
      chartRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const option = {
        series: [
          {
            data: [percentage / 100]  // Actualizar la primera barra
          },
          {
            data: [percentage / 100]  // Actualizar la segunda barra
          }   
        ]
      };
      chart.setOption(option);
    }
  }, [percentage]);

  return <div id="liquidfill-chart" style={{ width: '400px', height: '400px' }}></div>;
}

export default LiquidFillChart;
