"use client";
import Topic from '@/app/_components/Topic'
import React, { useState } from 'react'

function page() {
  const [formData , setformData] = useState();

  const handleFormSubmit = (fieldName, fieldValue) => {
   setformData(prev => ({
    ...prev,
    [fieldName] : fieldValue
   }))

   console.log(formData)
  }
  return (
    <div>
     <h2 className='text-2xl font-bold'>Create New Video</h2>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-7'>
        <div className='md:col-span-2 p-7 border border-gray-800 rounded-lg'>
            {/* Topic section  */}
     <Topic handleFormSubmit={handleFormSubmit}/>
        </div>
     </div>
     <div>

     </div>

    </div>
  )
}

export default page
