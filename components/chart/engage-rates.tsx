import Link from 'next/link'
import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const EngageRate = () => {
    return (
        <div className='flex justify-between items-center p-4 mt-0'>
            <h1 className='font-normal'>Engagement Rates</h1>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Weekly" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Date</SelectLabel>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default EngageRate