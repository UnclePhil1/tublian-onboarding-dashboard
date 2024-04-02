'use client'

import React from 'react';
import EngageRate from './engage-rates'; // Importing EngageRate component
import BarSimpleCharts from './barChart'; // Importing BarSimpleCharts component
import { TableLayout } from '../table'; // Importing TableLayout component
import Audience from './audience'; // Importing Audience component
import PieChartWithCustomizedLabel from './pieChart'; // Importing PieChartWithCustomizedLabel component
import Stackbar from './stackBar'; // Importing Stackbar component
import Location from '@/components/location'; // Importing Location component
import VisitorsTable from '@/components/visitorTable'; // Importing VisitorsTable component

// Define the GridContainer component
const GridContainer = () => {
  return (
    // Grid container with two columns for layout
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center pt-8 gap-4 mb-10">
      {/* Left column */}
      <div className="flex flex-col justify-between">
        {/* Render EngageRate component */}
        <EngageRate />
        {/* Container for BarSimpleCharts */}
        <div className="overflow-x-auto bg-white rounded-md p-2 mt-8">
          <BarSimpleCharts />
        </div>
        {/* Render TableLayout component */}
        <TableLayout />
      </div>
      {/* Right column */}
      <div className="">
        {/* Render Audience component */}
        <Audience />
        {/* Container for PieChartWithCustomizedLabel and Stackbar */}
        <div className='bg-white rounded-md p-4'>
          {/* Grid for PieChartWithCustomizedLabel and Stackbar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-start">
            <PieChartWithCustomizedLabel />
            <Stackbar />
          </div>
          {/* Horizontal line */}
          <hr className="mt-5 lg:mt-0" />
          {/* Render Location component */}
          <Location />
          {/* Render VisitorsTable component */}
          <VisitorsTable />
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
