import Link from 'next/link'
import React from 'react'

const Performance = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        <h1 className='font-normal'>Performance Metrics</h1>
        <Link className='underline text-greenDefault text-end' href={'/'}>Download Summary</Link>
    </div>
  )
}

export default Performance