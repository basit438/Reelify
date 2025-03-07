"use client";
import React, { useEffect } from 'react'
import DashboardLayout from './layout'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useRouter } from 'next/navigation'  // 
import { useAuthContext } from '@/components/Provider';

function DashboardProvider({ children }) {
  const { user } = useAuthContext();
  const router = useRouter();

  

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <div className="p-4">
        {children}
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardProvider;
