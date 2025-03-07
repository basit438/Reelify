import React, { useState } from 'react'

export const options =[
  {
    name: "Cinematic",
    image :'/cinematic.jpg',

  },
  {
    name: "Cartoon",
    image :'/cartoon.jpg',
  },
  {
    name : "Cyberpunk",
    image :'/cyberounk.png',
  },
  {
    name: "Watercolor",
    image :'/wartercolor.png',
  },
  {
    name: "Retro",
    image :'/retro.png',
  },
  {
    name: "Nature",
    image :'/nature.png',
  }
]

function VideoStyles({handleFormSubmit}) {
  const [selectedStyle, setSelectedStyle] = useState();

    
  return (
    <div className='mt-7'>
   <h2 className='text-2xl font-bold'>Video Styles</h2>
   <p className='text-gray-400 mt-2'>Select a video style</p>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-5'>
      {options.map((option, index) => (
        <div key={index} onClick={() => {
          setSelectedStyle(option.name);
          handleFormSubmit('Video_style', option.name);
        }
        } className='cursor-pointer'>
        <img src={option.image} alt={option.name} className={`w-full h-40 object-cover rounded-lg hover:border-2 border-blue-500 ${option.name === selectedStyle && 'border-5 border-green-700' }`}/>
        <p className='text-center mt-2 font-bold'>{option.name}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default VideoStyles

