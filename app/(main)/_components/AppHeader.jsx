"use client";
import { useAuthContext } from '@/components/Provider';
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import Image from 'next/image';

function AppHeader() {
    const { user } = useAuthContext();

    // If user.photoURL is not available, use a fallback image or skip rendering the Image component
    const photoURL = user?.photoURL || '/default-avatar.png'; // Path to default avatar image

    return (
        <div className='relative p-3'>
            {/* <SidebarTrigger /> */}
            {photoURL ? (
                <Image
                    src={photoURL}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full absolute top-3 right-3 border-2 border-white"
                />
            ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full absolute top-3 right-3 border-2 border-white" />
            )}
        </div>
    );
}

export default AppHeader;
