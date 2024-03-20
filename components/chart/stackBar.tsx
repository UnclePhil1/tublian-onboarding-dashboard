// pages/BarChart.tsx or components/BarChart.tsx
import React from 'react';
import Legend from '../legends';

const dataOne = [
    { ageRange: '16-25', percentage: 40, color: 'bg-[#283350]', green: 'green' },
];
const dataTwo = [
    { ageRange: '25-35', percentage: 40, color: 'bg-[#283350]', green: 'green' },
];
const dataThree = [
    { ageRange: '35-55', percentage: 40, color: 'bg-[#283350]', green: 'green' },
];
const dataFour = [
    { ageRange: '55+', percentage: 40, color: 'bg-[#283350]', green: 'green' },
];

const Stackbar: React.FC = () => {
    return (
        <div className="relative">
            <Legend />
            <h1 className='font-normal px-4 my-8'>Age Group</h1>
            <div className="space-y-6 pt-10">
                {dataOne.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div className="flex items-center">
                            <div className={`${item.color} text-xs font-medium text-white text-center p-2 leading-none`} style={{ width: `${item.percentage}%` }}>{item.ageRange}</div>
                            <div className={`text-xs font-medium text-green-600 p-2 leading-none w-[130px] bg-green-600`}>{item.green}</div>
                            <div className="bg-[#FFF854] text-xs font-medium text-transparent text-center p-2 leading-none flex-1">{item.percentage}%</div>
                        </div>
                        <p className="text-sm pl-1">40%</p>
                    </div>
                ))}
                {dataTwo.map((item, index) => (
                    <div key={index} className="flex items-center w-[200px]">
                        <div key={index} className="flex items-center">
                            <div className={`${item.color} text-xs font-medium text-white text-center p-2 leading-none`} style={{ width: `${item.percentage}%` }}>{item.ageRange}</div>
                            <div className={`text-xs font-medium text-green-600 p-2 leading-none w-[140px] bg-green-600`}>{item.green}</div>
                            <div className="bg-[#FFF854] text-xs font-medium text-transparent text-center p-2 leading-none flex-1 w-[30px]">{item.percentage}%</div>
                        </div>
                        <p className="text-sm pl-1">30%</p>
                    </div>
                ))}
                {dataThree.map((item, index) => (
                    <div key={index} className="flex items-center w-[180px]">
                        <div key={index} className="flex items-center">
                            <div className={`${item.color} text-xs font-medium text-white text-center p-2 leading-none`} style={{ width: `${item.percentage}%` }}>{item.ageRange}</div>
                            <div className={`text-xs font-medium text-green-600 p-2 leading-none bg-green-600 w-[100px]`}>{item.green}</div>
                            <div className="bg-[#FFF854] text-xs font-medium text-transparent text-center p-2 leading-none flex-1 w-[20px]">{item.percentage}%</div>
                        </div>
                        <p className="text-sm pl-1">20%</p>
                    </div>
                ))}
                {dataFour.map((item, index) => (
                    <div key={index} className="flex items-center w-[140px]">
                        <div key={index} className="flex items-center">
                            <div className={`${item.color} text-xs font-medium text-white text-center p-2 leading-none`} style={{ width: `${item.percentage}%` }}>{item.ageRange}</div>
                            <div className={`text-xs font-medium text-green-600 p-2 leading-none bg-green-600 w-[100px]`}>{item.green}</div>
                            <div className="bg-[#FFF854] text-xs font-medium text-center p-2 leading-none flex-1 w-[5px] text-transparent">{item.percentage}%</div>
                        </div>
                        <p className="text-sm pl-1">10%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stackbar;
