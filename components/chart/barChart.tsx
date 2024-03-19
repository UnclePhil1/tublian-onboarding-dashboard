'use client'

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarSimpleCharts() {
  return (
    <BarChart
    colors={['#0fa44b2f']}
      xAxis={[
        {
          id: 'barCategories',
          data: ['Mon', 'Tue', 'Wed','Thu', 'Fri', 'Sat', 'Sun'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [25, 20, 63, 45,100, 47, 80],
        },
      ]}
      width={500}
      height={300}
    />
  );
}