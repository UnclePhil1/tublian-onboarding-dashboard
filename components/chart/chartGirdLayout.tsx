'use client'

import React from 'react';
import EngageRate from './engage-rates';
import BarSimpleCharts from './barChart';
import { TableLayout } from '../table';

const GridContainer = () => {
  //   const breakpoint = 768;
  //   const grid = {
  //     '0-768px': '1-col',
  //     '769px-': '2-col'
  //   };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center pt-8">
      <div className="">
        <EngageRate />
        <div className="overflow-x-auto bg-white rounded-md p-2">
          <BarSimpleCharts />
        </div>
        <TableLayout />
      </div>
      <div className="">Right</div>
    </div>
  );
};

export default GridContainer;