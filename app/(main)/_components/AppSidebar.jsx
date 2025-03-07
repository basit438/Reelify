"use client";
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Gem, HomeIcon, LucideFileVideo, Search, WalletIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useAuthContext } from '@/components/Provider';
function AppSidebar() {
  const path = usePathname();
  const { user } = useAuthContext();
  const menuItems =[
    {
      title: 'Home',
      icon: HomeIcon,
      href: '/dashboard'
    },
    {
      title: 'Create Video',
      icon : LucideFileVideo,
      href: '/create-new-video'
    },
    {
      title: "Explore",
      icon: Search,
      href: '/explore'
    },
    {
      title :"Billing",
      icon: WalletIcon,
      href: '/billing'
    }
  ]
  return (
    <Sidebar>
    <SidebarHeader>
        <div>
        <div className="flex items-center gap-2 w-full justify-center pt-5">
        <Image src = "/logo.svg" alt="logo" width={40} height={40} color="white" className="w-10 h-10" />
        <h2 className="text-2xl font-bold">Reelix</h2>
        </div>
        <h2 className='text-md pt-1 text-gray-400 text-center'>Generate Shorts with AI</h2>
        </div>
        
        </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
       <SidebarGroupContent>
          <div className='mx-5 mt-2'>
            <Link href={'/create-new-video'}>
            <Button className="w-full">+Create New Video</Button>
            </Link>
            
          </div>
          <SidebarMenu>
            {menuItems.map((menu, index)=>(
              <SidebarMenuItem key={index} className="pt-3">
                <SidebarMenuButton isActive={path === menu.href} className= "p-5">
                <Link href={menu.href}  className='flex items-center gap-2 p-3'>
                 
                 <menu.icon />
                 <span>{menu.title}</span>
             
             </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
       </SidebarGroupContent>
        </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter>
      <div className="p-5  bg-gray-900 rounded-lg mb-3">
        <div className="flex items-center justify-between">
          <Gem className='text-gray-500'/>
          <h2 className='text-gray-300 text-font-semibold'>{user?.credits} Credits Left</h2>
        </div>
        <Button className="w-full mt-3">Buy More Credit</Button>
      </div>
    </SidebarFooter>
  </Sidebar>
  )
}

export default AppSidebar
