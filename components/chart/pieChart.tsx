import * as React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

// Sample data for the pie chart
const data = [
    { label: 'Male', value: 530, color: '#283350' },
    { label: 'Female', value: 790, color: '#0FA44A' },
    { label: 'Others', value: 200, color: '#FFF854' },
];

// Sizing configuration for the chart
const sizing = {
    margin: { right: 5, top: 50 },
    width: 250,
    height: 250,
    legend: { hidden: true },
};

// Calculate total value for percentage calculation
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

// Function to calculate arc label for each pie slice
const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

// Define the PieChartWithCustomizedLabel component
export default function PieChartWithCustomizedLabel() {
    return (
        <div className="relative">
            {/* Title for the chart */}
            <h1 className='font-normal px-4 m-[12px] text-transparent'>Gender</h1>
            {/* Subtitle for the chart */}
            <h1 className='font-normal px-4 m-8'>Gender</h1>
            {/* Render the PieChart component */}
            <PieChart
                series={[
                    {
                        outerRadius: 80,
                        data,
                        arcLabel: getArcLabel, // Custom arc label function
                        innerRadius: 60,
                    },
                ]}
                // Styling for arc labels
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'black',
                        fontSize: 0, // Hiding arc labels
                        marginLeft: 10,
                    },
                }}
                {...sizing} // Spread sizing configuration
            />
            {/* Custom labels for specific pie slices */}
            <p className='absolute top-[168px] left-16 font-semibold'>20%</p>
            <p className='absolute top-[225px] left-[200px] font-semibold'>30%</p>
            <p className='absolute bottom-5 left-10 font-semibold'>10%</p>
        </div>
    );
}
