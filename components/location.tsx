import React from 'react'
import { Button } from './ui/button'

const Location = () => {
  return (
    // Top location header for the countries & visitors table layout
    <div className='flex justify-between items-center p-4 mt-10 lg:mt-0'>
        <h1 className='font-normal'>Top Locations</h1>
        <Button variant='outline' className='border-greenDefault text-greenDefault hover:bg-greenDefault/10'>
          See More
        </Button>
    </div>
  )
}

export default Location