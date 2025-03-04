"use client"
import Provider from '@/components/Provider';
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import React from 'react'

function ConvexClientProvider({ children }) {
     const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <div>
        <ConvexProvider client={convex}>
            <Provider>{children}</Provider>
           
        </ConvexProvider>
     
    </div>
  )
}

export default ConvexClientProvider
