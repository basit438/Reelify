import React from 'react';
import Image from 'next/image';
import { options } from './VideoStyles';

function Preview({ formData }) {
  // Find the selected video style
  const selectedVideoStyle = formData && options.find(option => option.name === formData?.Video_style);

  return (
    <div className="mt-7">
      {/* Display the selected video style */}
      {selectedVideoStyle ? (
        <div>
          <h3 className="text-lg font-bold mb-4">Selected Video Style: {selectedVideoStyle.name}</h3>

          {/* Wrapping the image and caption in a container */}
          <div className="relative w-full h-80">
            {/* Display the selected caption if it exists */}
            {formData?.caption && (
              <div className="absolute bottom-10 left-0 right-0 text-center p-2 z-10">
                <h2 className={`${formData.caption.style}`}>{formData.caption.name}</h2>
              </div>
            )}

            {/* Display the image */}
            <Image 
              src={selectedVideoStyle.image} 
              alt={`${selectedVideoStyle.name} Image`} 
              layout="fill"
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>No video style selected yet.</p>
        </div>
      )}

      {/* Display selected caption if it's set */}
      {formData?.caption && !selectedVideoStyle && (
        <div className="mt-5 text-center">
          <h3 className="text-xl font-bold">Selected Caption Style:</h3>
          <h2 className={`${formData.caption.style} mt-2`}>{formData.caption.name}</h2>
        </div>
      )}
    </div>
  );
}

export default Preview;
