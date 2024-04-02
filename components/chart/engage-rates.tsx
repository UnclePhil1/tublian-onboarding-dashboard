import React from 'react'; // Importing React library

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"; // Importing select components

// Define the EngageRate component
const EngageRate = () => {
    return (
        // Container with flex layout, aligning items to the center
        <div className='flex justify-between items-center p-4 mt-0'>
            {/* Heading */}
            <h1 className='font-semibold'>Engagement Rates</h1>
            {/* Dropdown select component */}
            <Select>
                {/* Select trigger */}
                <SelectTrigger className="w-[100px]">
                    {/* Select value with placeholder */}
                    <SelectValue placeholder="Weekly" />
                </SelectTrigger>
                {/* Select content */}
                <SelectContent>
                    {/* Select group */}
                    <SelectGroup>
                        {/* Select label */}
                        <SelectLabel>Date</SelectLabel>
                        {/* Select items */}
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

// Export the EngageRate component
export default EngageRate;
