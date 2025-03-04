import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function AppSidebar() {
  return (
    <Sidebar>
    <SidebarHeader>
        <div>
        <div className="flex items-center gap-2 w-full justify-center pt-5">
        <Image src = "/logo.svg" alt="logo" width={40} height={40} color="white" className="w-10 h-10" />
        <h2 className="text-2xl font-bold">Reelify</h2>
        </div>
        <h2 className='text-md pt-1 text-gray-400 text-center'>Generate Shorts with AI</h2>
        </div>
        
        </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <Button >Create video</Button>
        </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  )
}

export default AppSidebar
