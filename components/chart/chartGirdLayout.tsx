'use client'

import React from 'react';
import EngageRate from './engage-rates';
import BarSimpleCharts from './barChart';
import { TableLayout } from '../table';
import Audience from './audience';
import PieChartWithCustomizedLabel from './pieChart';
import Stackbar from './stackBar';
import Location from '@/components/location';
import VisitorsTable from '@/components/visitorTable';

const GridContainer = () => {
  //   const breakpoint = 768;
  //   const grid = {
  //     '0-768px': '1-col',
  //     '769px-': '2-col'
  //   };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center pt-8 gap-4 mb-10">
      <div className="flex flex-col justify-between">
        <EngageRate />
        <div className="overflow-x-auto bg-white rounded-md p-2 mt-8">
          <BarSimpleCharts />
        </div>
        <TableLayout />
      </div>
      <div className="">
        <Audience />
        <div className='bg-white rounded-md p-4'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-start">
            <PieChartWithCustomizedLabel />
            <Stackbar />
          </div>
            <hr className="mt-5 lg:mt-0"/>
            <Location />
            <VisitorsTable />
        </div>
      </div>
    </div>
  );
};

export default GridContainer;