import Image from 'next/image'
import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="w-full h-full flex justify-center items-center text-center pt-[20%]">
                <Image
                    src={'./Images/spinner.gif'}
                    alt='loader'
                    width={300}
                    height={120}
                    className='w-[50px] h-[50px] object-cover'
                />
            </div>
        </div>
    )
}

export default Loading