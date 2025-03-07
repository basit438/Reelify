import { ScrollArea } from '@/components/ui/scroll-area';
import { nextMonday } from 'date-fns'
import React, { useState } from 'react'

function Voice({handleFormSubmit}) {
    const voiceOptions = [
        {
            "name" : "Sarah(female)",
            "value" : "af_sarah"
        },
        {
            "name" : "SKY(female)",
            "value" : "af_sky"
        },
        {
            "name" : "Adam",
            "value" : "am_adam"

        },
        {
            "name" : "Aditi",
            "value" : "hf_alpha"
        },
        {
            "name" :"Psi",
            "value" : "hm_psi"
        },
      
        {
            "name" : "Michael",
            "value" : "am_michael"
        },
        {
            "name" : "Fenrir",
            "value" : "am_fenrir"
        },
       
    ]
    const [selectedVoice, setSelectedVoice] = useState();
  return (
    <div className='mt-7'>
      <h2 className='text-2xl font-bold'>Video Voice</h2>
      <p className='text-gray-400'> Select a voice for your video</p>
     
      <ScrollArea >    {/* add height to the scroll area later if voices are more */}
      <div className='grid grid-cols-2 gap-4 mt-5'>
        {voiceOptions.map((option, index) => (
          <h2 key={index} onClick={() => {
            setSelectedVoice(option.value)
            handleFormSubmit('voice', option.value)
          }} className= {`cursor-pointer dark:bg-gray-800 dark:text-white p-3 rounded-lg hover:bg-blue-500 hover:border-2 border-white text-gray-600 ${option.value === selectedVoice && 'border-2 border-green-700'}`}>
          {option.name}
          </h2>

        ))}
      </div>
      </ScrollArea>
    </div>
  )
}

export default Voice
