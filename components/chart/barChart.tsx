'use client'

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart'; // Importing BarChart component from Material-UI

// Define the BarSimpleCharts component
export default function BarSimpleCharts() {
  return (
    // Rendering BarChart component
    <BarChart
      colors={['#0fa44b2f']} // Setting custom color for the bars
      xAxis={[ // Configuring x-axis
        {
          id: 'barCategories', // Identifier for the x-axis
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Labels for the x-axis
          scaleType: 'band', // Setting scale type to 'band' for categorical data
        },
      ]}
      series={[ // Configuring series data
        {
          data: [25, 20, 63, 45, 100, 47, 80], // Data for the bar chart
        },
      ]}
      width={500} // Setting width of the chart
      height={300} // Setting height of the chart
    />
  );
}
