"use client";
import Topic from '@/app/_components/Topic';
import VideoStyles from '@/app/_components/VideoStyles';
import Voice from '@/app/_components/Voice';
import React, { useState } from 'react';
import Captions from '@/app/_components/Captions';
import { Button } from '@/components/ui/button';
import Preview from '@/app/_components/Preview';

function page() {
  const [formData, setformData] = useState();

  const handleFormSubmit = (fieldName, fieldValue) => {
    setformData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }));

    console.log(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
        {/* Main content section */}
        <div className="md:col-span-2 p-7 border border-gray-800 rounded-lg h-[80vh] overflow-auto">
          <Topic handleFormSubmit={handleFormSubmit} />
          <VideoStyles handleFormSubmit={handleFormSubmit} />
          <Voice handleFormSubmit={handleFormSubmit} />
          <Captions handleFormSubmit={handleFormSubmit} />
          <Button className="mt-5 w-full">Create Video</Button>
        </div>
        
        {/* Preview section */}
        <div className="md:col-span-1 p-7 border border-gray-800 rounded-lg h-[80vh] overflow-auto">
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default page;
