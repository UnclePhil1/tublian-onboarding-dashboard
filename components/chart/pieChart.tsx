import * as React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Group A', value: 530, color: '#283350' },
    { label: 'Group B', value: 790, color: '#0FA44A' },
    { label: 'Group C', value: 200, color: '#FFF854' },
];

const sizing = {
    margin: { right: 5, top: 50 },
    width: 250,
    height: 250,
    legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
    return (
        <div className="relative">
            <h1 className='font-normal px-4 m-[12px] text-transparent'>Gender</h1>
            <h1 className='font-normal px-4 m-8'>Gender</h1>
            <PieChart
                series={[
                    {
                        outerRadius: 80,
                        data,
                        arcLabel: getArcLabel,
                        innerRadius: 60,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'black',
                        fontSize: 0,
                        marginLeft: 10,
                    },
                }}
                {...sizing}
            />
            <p className='absolute top-[168px] left-16 font-semibold'>20%</p>
            <p className='absolute top-[225px] left-[200px] font-semibold'>30%</p>
            <p className='absolute bottom-5 left-10 font-semibold'>10%</p>
        </div>
    );
}