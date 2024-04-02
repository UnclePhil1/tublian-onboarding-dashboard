import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    // Simple profile layout rendering the profile Image, name & email
    <div className='flex justify-start items-start'>
      {/* Profile Image */}
      <Image
        src={'./Images/profile.jpg'}
        alt='profile'
        width={700}
        height={300}
        className='w-10 h-10 object-cover rounded-full'
      />
      <div className="md:flex justify-start items-start flex-col pl-2 hidden">

        {/* Profile Name */}
        <h2 className='font-semibold text-sm'>Snow Olohijere</h2>
        
        {/* Profile Email */}
        <p className='font-normal text-[12px] text-lightgray'>uch231@gmail.com</p>
      </div>
    </div>
  )
}

export default Profile