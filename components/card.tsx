import React from 'react'

import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"


//defining the array for a grid card 
const cardArray = [
    {
        socials: 'Followers',
        iconArrow: ArrowOutwardIcon,
        text: '93.2k',
        iconUpArrow: ArrowUpwardIcon,
        percent: '0.8%',
        date: 'in the last 7 days',
        chartIcon: BarChartIcon,
    },
    {
        socials: 'Likes',
        iconArrow: ArrowOutwardIcon,
        text: '400k',
        iconUpArrow: ArrowUpwardIcon,
        percent: '1.21%',
        date: 'in the last 7 days',
        chartIcon: BarChartIcon,
    },
    {
        socials: 'Likes',
        iconArrow: ArrowOutwardIcon,
        text: '289.1k',
        iconUpArrow: ArrowUpwardIcon,
        percent: '2.7%',
        date: 'in the last 7 days',
        chartIcon: BarChartIcon,
    }
]

const CardComponent = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4'>
            {/* mapping out the cardArray using "".map()"" method*/}
            {
                cardArray.map((item, index) => (
                    <div className="" key={index}>
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-row gap-2 text-sm text-lightgray">
                                        {item.socials}
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <item.iconArrow className="h-5 w-5" />
                                    </div>
                                </div>
                                <h1 className="text-3xl font-semibold">{item.text}</h1>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-row gap-2 text-sm items-center text-lightgray">
                                        <item.iconUpArrow className="h-4 w-4 text-greenDefault" />
                                        <p className="text-greenDefault test-sm">
                                            {item.percent}
                                        </p>
                                        {item.date}
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <item.chartIcon className="h-8 w-8 text-greenDefault" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card> 
                    </div>
                ))
            }

        </div>
    )
}

export default CardComponent